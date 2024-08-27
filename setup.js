#!/usr/bin/env node
"use strict";import t from"fastify";import{processRequest as r}from"./src/pr.js";const s=t({t:true,o:true,i:true});const o=process.env.PORT||8080;s.get("/",async(t,s)=>{return r(t,s)});const e=async()=>{try{await s.listen({host:"0.0.0.0",port:o});console.log(`Listening on ${o}`)}catch(t){s.log.error(t);process.exit(1)}};e();
