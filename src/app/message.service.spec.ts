import { serialize } from "v8";
import { MessageService } from "./message.service";

describe('Message Service', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should have no messages to start', () => {
    service = new MessageService();

    expect(service.messages.length === 0);
  });

  it('should add a message when add is called', () => {
    service = new MessageService();

    service.add('message 1');

    expect(service.messages.length === 1);
  });

  it('should clear a message when clear is called', () => {
    service = new MessageService();
    service.add('test message');

    service.clear();

    expect(service.messages.length === 0);
  });


})
