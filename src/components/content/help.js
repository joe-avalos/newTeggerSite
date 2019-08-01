import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import withStyles from '@material-ui/styles/withStyles'

const PrivacyBox = withStyles({
  root:{
    '& .MuiTypography-h2':{
        marginTop:20,
        fontWeight:'300',
        marginBottom:10
    },

  }
})(Box)

export default function () {
  return (
    <>
    <PrivacyBox>
      <Typography variant={'h2'}>¿Qué es Tegger?</Typography>
      <Typography variant={'body2'} component="p">
        Tegger es una plataforma digital mexicana que – con base en tecnología blockchain- busca crear la primera
        economía
        de datos justa a nivel mundial, al distribuir el valor de los datos y la información generados al navegar por
        internet con sus usuarios, creadores de contenido, y sitios web afiliados.
      </Typography>
      <Typography variant={'h2'}>¿Cuál es el objetivo de Tegger?</Typography>
      <Typography variant={'body2'} component="p">
        La compañía fue fundada el 4 de mayo del 2018 en la Ciudad de México, por un grupo de jóvenes apasionados por
        democratizar el acceso a las tecnologías del blockchain y compartir sus beneficios con la mayor cantidad de
        personas
        posible.
        Ellos reconocieron la necesidad de crear una economía de datos justa, donde las personas que navegan en línea
        puedan
        retomar el control sobre la información que comparten en Internet y además obtengan recompensas a cambio de
        ello, al
        tiempo que los sitios o creadores de contenido puedan también tener acceso a datos que les permitan mejorar la
        experiencia de sus usuarios y colocar publicidad de manera más relevante para sus audiencias.
      </Typography>
      <Typography variant={'h2'}>¿Cómo funciona Tegger?</Typography>
      <Typography variant={'body2'} component="p">
        Tegger funciona por medio de un widget que se agrega sobre sitios de contenido aliados al sistema, y que permite
        a
        los usuarios escoger si quieren compartir tanto sus datos de navegación, como información adicional
        auto-reportada.
        El usuario y el sitio son recompensados con tokens por dicha información, mismos que pueden después utilizar
        para
        adquirir productos, servicios y experiencias en el marketplace de Tegger, y premiar contenido que les gusta. La
        información recabada de los usuarios servirá para que los medios o anunciantes puedan crear un mejor contenido y
        generar publicidad más relevante para los consumidores de información. Ni Tegger ni los sitios recabarán datos
        personales identificables de los usuarios.
      </Typography>
      <Typography variant={'h2'}>¿Cómo garantiza Tegger la seguridad de mis datos?</Typography>
      <Typography variant={'body2'} component="p">
        Tegger sólo recaba y almacena los datos de los usuarios de manera pseudónima. Además, Tegger tiene un catálogo
        de
        los datos que alberga sobre el blockhain de Ethereum, lo cual garantiza que exista un registro seguro,
        transparente,
        inmutable y descentralizado de los datos para que un usuario pueda verificar qué datos suyos conoce el sistema.
        Tegger cumple y excede la normatividad mexicana e internacional de uso de datos personales y pone a la
        disposición
        de los usuarios mayor detalle sobre esto en su aviso de privacidad.
      </Typography>
      <Typography variant={'h2'}>¿Qué son los Tegger Tokens?</Typography>
      <Typography variant={'body2'} component="p">
        Los Tegger Tokens (UIT) son una herramienta tecnológica que se usa para distribuir incentivos a los usuarios,
        sitios
        y creadores de contenido. Puedes ganarlos por navegar en sitios afiliados a Tegger (siempre que estés inscrito y
        tengas el sistema prendido) y por llenar misiones en tu perfil. Adicionalmente los niveles de Duque/Duquesa,
        Príncipe/Princesa y Rey/Reina reciben un porcentaje de los ingresos de sus referidos. Puedes usar los tokens
        para
        adquirir recompensas en el marketplace de Tegger.
      </Typography>
      <Typography variant={'h2'}>¿Qué hará Tegger con mis datos?</Typography>
      <Typography variant={'body2'}>
        Tegger utilizará los datos que recopile de sus usuarios para comercializarlos de manera pseudónima y agregada,
        ayudando a posicionar publicidad y/o generar contenido mejor curado en páginas de terceros. Tegger nunca venderá
        datos personales sino sólo después de procesarlos y volvernos anónimos con tendencias de audiencia. Existan
        datos
        personales que se usan por cuestiones estadísticas pero los cuales nunca se venderán.
      </Typography>
      <Typography variant={'h2'}>¿A quién puede beneficiar Tegger y cómo?</Typography>
      <Typography variant={'body2'}>
        Tegger permite a los usuarios digitales retomar el control de la información que comparten en línea, obteniendo
        recompensas a cambio de su consumo de contenido. Por su parte, los creadores de contenido, sitios o marcas
        podrán
        tener acceso a una inteligencia de audiencias precisa, que les permitirá tanto mejorar su experiencia de usuario
        y
        sus contenidos, como colocar publicidad de manera más eficiente y relevante.
      </Typography>
      <Typography variant={'h2'}>
        ¿Qué recompensas puede intercambiar el usuario en el Marketplace y qué debe hacer para obtenerlas?
      </Typography>
      <Typography variant={'body2'}>
        Para adquirir estas recompensas el usuario debe haber sido acreedor de tokens, los cuales haya ganado al
        compartir
        datos auto-reportados y por navegar en línea; posteriormente debe acceder al Marketplace y con un clic
        seleccionar
        los artículos, servicios o experiencias que estén habilitados (éstos dependerán del nivel que cada usuario vaya
        alcanzando en el sistema y los tokens disponibles) y que desee.
      </Typography>
      <Typography variant={'h2'}>
        ¿Cómo puede una empresa convertirse en partner de Tegger?¿Qué tiene que hacer?
      </Typography>
      <Typography variant={'body2'}>
        Todo aquel que tenga interés en el proyecto está invitado a visitar la página web; en ésta podrá encontrar toda
        la
        información pertinente. También se pueden comunicar con el equipo por medio de las redes sociales de la
        plataforma,
        en donde con gusto podemos resolver todas sus dudas e inquietudes.
      </Typography>
      <Typography variant={'h2'}>¿Cómo puedo limitar los datos que decido compartir?</Typography>
      <Typography variant={'body2'}>
        La plataforma Tegger te permitirá seleccionar los datos que deseas compartir . En cualquier momento y las veces
        que
        desees puedes cambiar la configuración, apagar y prender el sistema.
      </Typography>
      <Typography variant={'h2'}>¿Qué gano por compartir mis datos?</Typography>
      <Typography variant={'body2'}>
        Al compartir de manera voluntaria datos de browsing y autoreportados, Tegger te recompensará con tokens que
        puedes
        usar para adquirir productos, servicios y experiencias en nuestro marketplace, así como contenido exclusivo.
      </Typography>

    </PrivacyBox>
    </>
  )
}
