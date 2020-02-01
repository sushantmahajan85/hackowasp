const express = require('express');
const fs = require('fs');

const userData = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/userData.json`));

const Update = require('./../app');

exports.getAllUserUpdates = async (req, res) => {
    // console.log(req.requestTime);
    try {
        // const updates = await Update.find();

        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            data: {
                form: userData
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

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