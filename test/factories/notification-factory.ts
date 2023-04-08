import { Content } from '@application/entities/content';
import {
  Notification,
  INotification,
} from '@application/entities/notification';

type Override = Partial<INotification>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'Teste',
    content: new Content('Testando'),
    recipientId: 'recipient-2',
    ...override,
  });
}
