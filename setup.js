#!/usr/bin/env node
"use strict";import s from"fastify";import{processRequest as o}from"./src/pr.js";const t=s({t:false,o:false,i:true});const r=process.env.PORT||8080;t.get("/",async(s,t)=>{return o(s,t)});const e=async()=>{try{await t.listen({host:"0.0.0.0",port:r});console.log(`Listening on ${r}`)}catch(s){t.log.error(s);process.exit(1)}};e();
