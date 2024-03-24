import express, { Router } from "express";
import { UserInfo } from "remult";

const validUsers: UserInfo[] = [
    { id: '1', name: 'Tobs'},
    { id: '2', name: 'Tobias'},
]

export const auth = Router()
auth.use(express.json())

auth.post("/api/signIn", (req,res)=> {
    const user = validUsers.find((user) => user.name === req.body.username)
    if (user) {
        req.session!['user'] = user
        res.json(user)
    } else {
        res.status(404).json('Invalid User')
    }
})