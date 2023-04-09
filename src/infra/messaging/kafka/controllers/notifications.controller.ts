import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { SendNotification } from '@application/use-cases/send-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateNotificationBody } from '@infra/http/dto/create-notificatio-body.dto';

@Controller()
export class NotificationsController {
  constructor(
    private readonly sendNotification: SendNotification,
    private readonly readNotification: ReadNotification,
    private readonly unreadNotification: UnreadNotification,
    private readonly cancelNotification: CancelNotification,
  ) {}
  @EventPattern('notifications.send-notification')
  async handleSendNotification(@Payload() data: CreateNotificationBody) {
    await this.sendNotification.execute(data);
  }

  @EventPattern('notifications.read-notification')
  async handleReadNotification(@Payload() id: string) {
    await this.readNotification.execute({ notificationId: id });
  }

  @EventPattern('notifications.unread-notification')
  async handleUnreadNotification(@Payload() id: string) {
    await this.unreadNotification.execute({ notificationId: id });
  }

  @EventPattern('notifications.cancel-notification')
  async handleCancelNotification(@Payload() id: string) {
    await this.cancelNotification.execute({ notificationId: id });
  }
}
