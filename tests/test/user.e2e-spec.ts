import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(200)
      .expect('get /user');
  });
  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/user')
      .expect(201)
      .expect('post /user');
  });
  it('/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/user/1')
      .expect(200)
      .expect('get /user/:id 1');
  });
  it('/user/data (POST)', () => {
    return request(app.getHttpServer())
      .post('/user/data')
      .set('Accept', 'application/json')
      .query({
        username: 'pepesan',
        password: '1234',
      })
      .expect(201)
      .expect('post /user pepesan 1234');
  });
  it('/user/dto (POST)', () => {
    return request(app.getHttpServer())
      .post('/user/dto')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        name: 'pepesan',
        age: 2,
      })
      .expect(201)
      .expect('This action adds a new object with name: pepesan');
  });
  afterAll(async () => {
    await app.close();
  });
});
