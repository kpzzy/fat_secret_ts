import * as dotenv from 'dotenv';
dotenv.config();

interface ClientData {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
}

export const clientData: ClientData = {
  CLIENT_ID: process.env.CLIENT_ID || '',
  CLIENT_SECRET: process.env.CLIENT_SECRET || '',
};
