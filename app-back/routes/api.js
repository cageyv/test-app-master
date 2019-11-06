const express = require('express');
const router = express.Router();
const _get = require('lodash/get');
const Redis = require('ioredis');
const moment = require('moment');

const redis = new Redis(process.env.REDIS_URL+':6379');

redis.on('error', e => {
  console.error('redis error', e);
});
router.post('/logs', async (req, res, next) => {
  const eventName = _get(req, 'body.eventName', null);
  const logs = { event: eventName, date: moment().format() }

  try {
    const result = await redis.lpush('logs', JSON.stringify(logs));

    return res.status('200').json(logs);
  } catch (e) {
    console.error(e);
    return res.status('500').json(e);
  }
  redis.disconnect();
});
router.post('/data', async (req, res, next) => {
  const data = _get(req, 'body', null);
  const logs = { event: 'dataAdded', date: moment().format() }

  try {
    const result = await redis.lpush('data', JSON.stringify(data));
    const log = await redis.lpush('logs', JSON.stringify(logs));

    return res.status('200').json(data);
  } catch (e) {
    console.error(e);
    return res.status('500').json(e);
  }
  redis.disconnect();
});
router.get('/logs', async (req, res, next) => {
  try {
    const result = await redis.lrange('logs', 0, -1);

    return res.status('200').json(result.map(item => JSON.parse(item)));
  } catch (e) {
    console.error(e);
    return res.status('500').json(e);
  }
  redis.disconnect();
});
router.get('/data', async (req, res, next) => {
  try {
    const result = await redis.lrange('data', 0, -1);

    return res.status('200').json(result.map(item => JSON.parse(item)));
  } catch (e) {
    console.error(e);
    return res.status('500').json(e);
  }
  redis.disconnect();
});

module.exports = router;
