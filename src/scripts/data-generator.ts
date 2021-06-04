import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

// 1万件追加した後にそれを取得していく
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const userService = app.select(UserModule).get(UserService, { strict: true });

  for (const i in [...new Array(10000).keys()]) {
    const names = [];
    for (const j in [...new Array(10).keys()]) {
      names.push(userService.randomName());
    }
    await userService.createMany(names);
  }

  console.log('save');

  await app.close();
}

console.info('✨✨✨DEV UPDATE SHOP JOB✨✨✨');
console.info('▶️STARTED');
bootstrap()
  .then(() => console.info('✨✨✨DONE✨✨✨'))
  .catch((error) => {
    console.info('🚨🚨🚨ERROR🚨🚨🚨');
    console.error(error);
  });
