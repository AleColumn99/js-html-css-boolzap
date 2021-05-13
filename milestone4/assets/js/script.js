const app = new Vue ({

  el: '#app',
  data: {

    user: {
      name: 'Nome Utente',
      avatar: '_io'
    },
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
      {
        name: 'Marco',
        avatar: '_5',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Oh ma sto Leclerc?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Che pilota pazzesco mamma mia',
            status: 'received'
          },
          {
            date: '10/01/2020 15:56:35',
            text: 'Fa dei sorpassi clamorosi',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Maria',
        avatar: '_6',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Tu chi prenderesti fossi in Toto?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Russell tutta la vita!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luca',
        avatar: '_7',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Oh ma sto Leclerc?',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Che pilota pazzesco mamma mia',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:56:35',
            text: 'Fa dei sorpassi clamorosi',
            status: 'received'
          }
        ],
      },
      {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Oh ma sto Leclerc?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Che pilota pazzesco mamma mia',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:56:35',
            text: 'Fa dei sorpassi clamorosi',
            status: 'received'
          }
        ],
      }
    ],
    contactActive: 0,
    responses: [
      'Assolutamente no!',
      'Bella ideaa',
      'Tu dici?',
      'Ok può andare',
      'No dai questo no',
      'Bellissimooo',
      'Sei un folle fra'
    ]

  },
  methods: {

    sendMessage() {
      if(this.inputMessage.length > 0) {

        this.pushMessage(this.inputMessage, 'sent')
        this.inputMessage = '';

        setTimeout(() => {
          let response = this.responses[Math.floor(Math.random() * this.responses.length-1) + 1];
          this.pushMessage(response, 'received')
        }, 1000);
      }
    },
    pushMessage(text, status) {
      this.contacts[this.contactActive].messages.push({
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        text: text,
        status: status
      });
    },
    lastAccess(index) {
      let contactMessages = this.contacts[index].messages;
      return contactMessages[contactMessages.length-1].date;
    },
    lastMessage(index) {
      let messages = this.contacts[index].messages;
      if(messages[messages.length-1].text.length > 30) {
        let splicedMsg = messages[messages.length-1].text.slice(0, 30) + "...";
        return splicedMsg;
      } else {
        return messages[messages.length-1].text;
      }
    },
    findContacts(string) {
      let newString = string.toUpperCase();
      console.log(newString);
      for (counter in this.contacts) {
        let nameString = this.contacts[counter].name.toUpperCase();
        console.log(nameString);
        if (nameString.includes(newString)) {
          this.contacts[counter].visible = true;
        } else {
          this.contacts[counter].visible = false;
        }
      }
    }

  }

});