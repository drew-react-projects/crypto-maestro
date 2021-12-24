import React from 'react';
import moment from 'moment';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 10 : 50,
  });

  console.log(cryptoNews);

  return <div></div>;
};

export default News;
