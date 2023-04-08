import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { Notification } from '../../../../application/entities/notification';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationMapper } from '../mappers/prisma.notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    const rawNotification = PrismaNotificationMapper.toPrisma(notification);
    await this.prisma.notification.create({
      data: rawNotification,
    });
  }
}
