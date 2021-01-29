<template>
  <ul>
    <FaqItem v-for="qstn in commonQuestions" :key="qstn.id" :question="qstn.question" :answer="qstn.answer" />
  </ul>
</template>

<script>
import FaqItem from './ui/FaqItem';

export default {
  components: { FaqItem },
  data() {
    return {
      commonQuestions: [
        {
          id: '1',
          question: 'How do I change my details?',
          answer:
            'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!',
        },
        {
          id: '2',
          question: 'What platforms will I be able to use?',
          answer:
            'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!',
        },
        {
          id: '3',
          question: 'How do I change my details?',
          answer:
            'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!',
        },
        {
          id: '4',
          question: 'How do I change my details?',
          answer:
            'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!',
        },
        {
          id: '5',
          question: 'How do I change my details?',
          answer:
            'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!',
        },
        {
          id: '6',
          question: 'How do I change my details?',
          answer:
            'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!',
        },
        {
          id: '7',
          question: 'How do I change my details?',
          answer:
            'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  max-width: 995px;
  margin: 60px auto 0;

}
</style>
