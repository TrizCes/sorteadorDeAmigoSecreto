import Card from '../../components/Card';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import ListParticipants from '../../components/ListParticipants/ListParticipants';

const Config = () => {
  return (
    <Card>
      <section>
        <h2>Bora jogar!!!</h2>
        <Form />
        <ListParticipants />
        <Footer />
      </section>
    </Card>
  );
};

export default Config;
