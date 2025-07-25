import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mentorship } from './entities/mentorship.entity';
import { MentorshipSession } from './entities/mentorship-session.entity';
import { MentorshipService } from './mentorship.service';
import { MentorshipController } from './mentorship.controller';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mentorship, MentorshipSession, User])],
  providers: [MentorshipService],
  controllers: [MentorshipController],
  exports: [MentorshipService],
})
export class MentorshipModule {}
