import { Request, Response } from 'express';
import { clientData } from '../../../interfaces/clientDataInterface';
import { Data, ResponseData } from '../../../interfaces/axiosInterface';
import configData from '../../../config/configData';
import axios, { AxiosResponse } from 'axios';

export const getAccessToken = async (
  req: Request,
  res: Response
): Promise<Data | void> => {
  const toeknURL = configData.URL.getAccessToken;
  try {
    const response: AxiosResponse<Data> = await axios.post(
      toeknURL,
      new URLSearchParams({
        grant_type: 'client_credentials',
        scope: 'basic',
      }),
      {
        auth: {
          username: clientData.CLIENT_ID,
          password: clientData.CLIENT_SECRET,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return res.status(200).json({ data: response.data });
  } catch (err) {
    console.error('i catch error:', err);
  }
};

// export const getAccessToken = (req: Request, res: Response):
