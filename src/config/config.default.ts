import { MidwayConfig } from '@midwayjs/core';
import { Photo } from '../entity/photo';
export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1667206688859_8554',
  koa: {
    port: 7001,
  },
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'koa',
        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
        logging: false,
        // 配置实体模型 或者 entities: '/entity',
        entities: [Photo],
      },
    },
  },
} as MidwayConfig;
