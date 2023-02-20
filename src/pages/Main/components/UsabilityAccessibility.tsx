import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import image from 'assets/images/carbon.png';

const UsabilityAccessibility = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Usabilidad y accesibilidad
      </Typography>
      <Typography variant="body1">
        La usabilidad y la accesibilidad son dos conceptos relacionados pero
        distintos en el ámbito de la arquitectura de la información y el diseño
        de productos digitales, la usabilidad se refiere a la facilidad de uso y
        eficiencia de un producto o sistema para realizar tareas específicas.
        <br /> La usabilidad se evalúa en términos de la eficacia (si se puede
        lograr la tarea con éxito), eficiencia (si se puede realizar la tarea
        con rapidez), satisfacción (si los usuarios están satisfechos con la
        experiencia) y facilidad de aprendizaje (cuánto tiempo y esfuerzo se
        necesita para aprender a usar el producto o sistema).
      </Typography>
      <Typography variant="body1" mt={1}>
        Por otro lado, la accesibilidad se refiere a la capacidad de un producto
        o sistema para ser utilizado por personas con diferentes habilidades y
        discapacidades. Esto incluye personas con discapacidades visuales,
        auditivas, motoras y cognitivas. Un producto o sistema accesible es
        aquel que se puede usar con la misma facilidad y eficiencia por personas
        con y sin discapacidades.
      </Typography>
      <Box textAlign={'center'} my={2}>
        <img
          src={image}
          alt="Codigo de ejemplo de la usabilidad"
          width="400px"
          height="auto"
        />
        <Typography variant="subtitle2">
          Ejemplo de la imagen usada en la sección de usabilidad
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          mt={1}
          px={{
            xs: 1,
            md: 4,
          }}
        >
          En la imagen anterior se puede ver un ejemplo de código HTML que
          muestra cómo se puede mejorar la accesibilidad de un sitio web. En
          este caso, se utiliza la etiqueta <code>alt</code> para proporcionar
          una descripción de la imagen, lo que permite a las personas que
          utilizan lectores de pantalla o que tienen problemas de visión
          entender qué es lo que se muestra en la imagen.
        </Typography>
      </Box>
      <Typography variant="body1">
        En resumen, la usabilidad se refiere a la facilidad de uso y eficiencia,
        mientras que la accesibilidad se refiere a la inclusión y equidad en el
        acceso a la tecnología y la información.
      </Typography>
    </div>
  );
};

export default UsabilityAccessibility;
