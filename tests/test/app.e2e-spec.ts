import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

//pruebas de aceptacion. van en fihero e2e
describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => { //antes de ejectar cada test
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/:id (GET)', () => {
    return request(app.getHttpServer())
    .get('/user/1')
    .expect(200)
    .expect('get /user/:id 1');
    });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
    .post('/user')
    .expect(201)
    .expect('post /user');
    });



    it('/user/data (POST)', () => {
      return request(app.getHttpServer())
      .post('/user/data')
      .set('Accept', 'application/json')
      .query({
      username: 'eduardo',
      password: 'hola',
      })
      .expect(201)
      .expect('post /user eduardo hola');
      });


      it('/user/dto (POST)', () => {
        return request(app.getHttpServer())
        .post('/user/dto')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({
        name: 'eduardo',
        age: 39,
        })
        .expect(201)
        .expect('This action adds a new object with name: eduardo');
        });
  afterAll(async () => {
    await app.close();
  });
});
