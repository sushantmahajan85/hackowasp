const express = require('express');
const fs = require('fs');

const userData = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/userData.json`));

exports.getAllUserUpdates = (req, res) => {
    console.log(req.requestTime);

    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        data: {
            form: userData
        }
    })
}

exports.createUserUpdate = (req, res) => {
    console.log(req.requestTime);

    res.status(201).json({
        status: 'done',
        createdAt: req.requestTime,
        data: {
            userData
        }
    })
}