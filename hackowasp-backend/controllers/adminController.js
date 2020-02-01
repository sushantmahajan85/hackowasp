const express = require('express');
const fs = require('fs');

const adminData = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/adminData.json`));

exports.getAllAdminUpdates = (req, res) => {
    console.log(req.requestTime);

    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        data: {
            form: adminData
        }
    })
}

exports.createAdminUpdate = (req, res) => {
    console.log(req.requestTime);

    res.status(201).json({
        status: 'done',
        createdAt: req.requestTime,
        data: {
            adminData
        }
    })
}