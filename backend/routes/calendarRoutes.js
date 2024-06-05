// backend/routes/calendarRoutes.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// 이벤트 스키마 정의
const eventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date
});

// 이벤트 모델 정의
const Event = mongoose.model('Event', eventSchema);

// 라우팅 로직 작성
router.get('/calendars', (req, res) => {
  // ...
});

router.get('/events', (req, res) => {
  // ...
});

router.post('/events', async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.status(201).json(newEvent);
});

module.exports = router;
