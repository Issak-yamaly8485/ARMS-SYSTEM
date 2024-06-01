#!/bin/bash


cd client && npm run dev & disown
cd server && npm run dev & disown
