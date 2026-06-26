import productRoutes from './routes/productRoutes.js';
import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';
import pool from './init.sql';

const servidor = express();

servidor.use(cors());
servidor.use(express.json());
servidor.use('/', productRoutes);