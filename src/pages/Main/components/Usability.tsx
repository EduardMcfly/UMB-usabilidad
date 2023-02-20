import { Typography } from '@mui/material';
import image from 'assets/images/people_building_a_web_application.png';
import Box from '@mui/material/Box';

const Usability = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Usabilidad: nociones básicas para los profesionales de la información
      </Typography>
      <Typography variant="body1">
        La usabilidad se refiere a la medida en que un producto o sistema es
        fácil de usar y eficiente para lograr los objetivos del usuario de
        manera efectiva, eficiente y satisfactoria. En otras palabras, la
        usabilidad se refiere a la capacidad de un producto o sistema para
        permitir que los usuarios realicen tareas específicas de manera fácil y
        eficiente, sin experimentar frustración o confusión.
      </Typography>
      <Box textAlign={'center'} my={2}>
        <img
          src={image}
          alt="Personas construyendo una aplicación web"
          width="400px"
          height="auto"
        />
        <Typography variant="subtitle2">Fuente: Midjourney A.I</Typography>
      </Box>
      <Typography variant="body1">
        La usabilidad es un aspecto importante en la arquitectura de
        información, ya que la forma en que se organiza y presenta la
        información puede tener un gran impacto en la facilidad de uso de un
        producto o sistema. La usabilidad se puede medir y mejorar a través de
        pruebas de usuario, evaluaciones de expertos y análisis de datos de uso,
        entre otras técnicas.
      </Typography>
    </div>
  );
};

export default Usability;
