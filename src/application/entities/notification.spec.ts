import { randomUUID } from 'node:crypto';
import { Notification } from './notification';
import { Content } from './content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'teste',
      content: new Content('Voce recebeu uma nova venda!'),
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy;
  });
});
