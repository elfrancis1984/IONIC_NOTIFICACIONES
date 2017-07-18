// IONIC CLOUD
import { CloudSettings } from '@ionic/cloud-angular';

export const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'f22ce1d7'
  },
  'push': {
    'sender_id': '701289708332',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#b81abb'
      }
    }
  }
};
