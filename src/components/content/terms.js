import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import withStyles from '@material-ui/styles/withStyles'

const PrivacyBox = withStyles({
  root:{
    '& .MuiTypography-h2':{
        marginTop:20,
        fontWeight:'300',
        marginBottom:8,
    },
    '& .MuiTypography-body2':{
        marginTop:8,
        fontWeight:'300',
        marginBottom:8,
    },

  }
})(Box)

export default function () {
  return (
    <PrivacyBox>
    <Typography component="ol">
      <Typography variant={'h2'} component="li">
        Responsable del tratamiento
        <Typography variant={'body2'} component="p">
          Tegger DLP S.A.P.I. de C.V. (en adelante conocido como “Tegger”) con domicilio en Durango número 169 piso
          2, Colonia Roma Norte, Delegación Cuauhtémoc, C.P. 06700, Ciudad de México y con RFC TDL181116FI7 es
          responsable de proveer los Servicios que se describen en los presentes Términos y Condiciones.
        </Typography>
        <Typography variant={'body2'} component="p">
          Podrás ponerte en contacto con nosotros y ser contactado a través de los siguientes canales de
          comunicación:
        </Typography>
        <Typography variant={'body2'} component="p">
          Teléfono: <Link href="tel:+52-55-6284-5439">(55) 6284-5439</Link>
          Correo electrónico:
          <Link href="mailto:protección.datos@tegger.io">protección.datos@tegger.io</Link>
          Sitio web: https://tegger.io
          Redes sociales: <Link href="https://twitter.com/TeggerProject">@teggerProject</Link> en Twitter
          y <Link href="https://facebook.com/TeggerProject">TeggerProject en Facebook.</Link>
        </Typography>
        <Typography variant={'body2'} component="p">
          En caso de tener alguna duda sobre nuestros Servicios (dicho término se define más adelante) podrás
          contactarnos en los citados medios de atención. En caso de que hayamos recibido tu solicitud en días u
          horas no hábiles, la misma se tendrá por presentada a partir del día hábil siguiente.
          En caso de que necesitemos contactarte lo haremos a través del correo electrónico que tengas registrado.
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Aceptación de los Términos y Condiciones
        <Typography variant={'body2'} component="p">
          Al hacer uso de la Plataforma, registrarte y/o contratar nuestros Servicios, te obligas de conformidad con
          los presentes Términos y Condiciones y autorizas que Tegger utilice tu información para los fines
          contemplados en nuestro Aviso de Privacidad. Para más información sobre el tratamiento que llevamos a cabo
          de tus datos personales ponemos a tu disposición nuestro Aviso de Privacidad en www.tegger.io
        </Typography>
        <Typography variant={'body2'} component="p">
          Por lo anterior te recomendamos que, de manera previa a utilizar los Servicios de la Plataforma, leas
          cuidadosamente los presentes Términos y Condiciones, así como nuestro Aviso de Privacidad, ya que los
          mismos pueden ser actualizados y/o modificados por Tegger en cualquier momento.
        </Typography>
        <Typography variant={'body2'} component="p">
          Los presentes Términos y Condiciones son aplicables con independencia del tipo de dispositivo utilizado
          para usar los Servicios. Podrás acceder en cualquier momento a la versión actualizada de los Términos y
          Condiciones únicamente dando click en el apartado “Términos y Condiciones”.
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Definiciones
        <Typography variant={'body2'} component="p">
          Para efectos de lo dispuesto en los presentes Términos y Condiciones se emplearán las siguientes
          definiciones:
        </Typography>
        <Typography variant={'body2'} component="p">
          Plataforma: La plataforma de “Tegger” disponible a través de nuestra aplicación, software, sitio
          web y/o funcionalidades.
          Aviso de Privacidad: Es el documento físico, electrónico o en cualquier otro formato generado por
          Tegger y que es puesto a disposición de la persona a la que corresponden los datos personales, previo al
          tratamiento de sus datos personales.
          Beneficios: Se refiere a los productos y/o servicios que pueden adquirir los Usuarios de Tegger
          mediante una redención de Tokens.
          LFPC: Ley Federal de Protección al Consumidor.
          LFPDPPP: Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
          Plataforma: Sistema informático implementado por Tegger para que el Usuario pueda consultar
          información relativo a los Servicios, solicitar los Servicios y recibir los Beneficios que Tegger ofrece.
          PROFECO: La Procuraduría Federal de Protección al Consumidor.
          Tegger: Tegger DLP S.A.P.I. de C.V.
          Tegger Tokens (UIT): Es la denominación que se da a la unidad de cambio obtenida por los Usuarios a
          través de su Perfil, derivado de la información compartida por el Usuario con Tegger a través de la
          Plataforma, así como su interacción con el contenido de las aplicaciones y/o sitios web de nuestros socios
          comerciales. Los Tokens pueden ser intercambiables por los Beneficios que ofrece Tegger en su Marketplace
          y/o en plataformas de terceros que lleguen a tener un acuerdo comercial con Tegger por lo tanto, no son
          intercambiables ni reembolsables en efectivo.
          Servicios: Aquellos descritos en el numeral 4 de los presente Términos y Condiciones.
          Sitio web: El sitio www.tegger.io
          Términos y Condiciones: Se refiere a los presentes Términos y Condiciones.
          Perfil: Se refiere a la cuenta del Usuario para acceder a la Plataforma y recibir los Servicios y/o
          Beneficios de Tegger.
          Usuario: Es la persona que se registra y accede a los Servicios.
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Servicios
        <Typography variant={'body2'} component="p">
          Los Servicios prestados por Tegger consisten en conceder al Usuario el acceso a la Plataforma para que a
          través de ella pueda acumular y/o redimir Tokens por medio de su Perfil derivado de compartir
          voluntariamente diversos datos personales y de tu navegación con Tegger.
        </Typography>
        <Typography variant={'body2'} component="p">
          Te recordamos que el Usuario es responsable por los costos del plan de datos de su operador de telefonía
          móvil, así como de las demás tarifas e impuestos asociados con el uso de los Servicios.
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Condiciones de uso de la Plataforma
        <Typography variant={'body2'} component="p">
          Tegger se obliga a prestar los Servicios de forma responsable, leal y transparente de acuerdo con lo
          dispuesto en los presentes Términos y Condiciones.
        </Typography>
        <Typography variant={'body2'} component="p">
          Al registrarte como Usuario de la Plataforma, Tegger generará tu Perfil el cual solamente podrá ser
          utilizado para obtener los Servicios y/o Beneficios ofrecidos por Tegger. Para ingresar a tu Perfil
          podemos solicitarte detalles sobre tu registro. Solo puedes registrar un Perfil. Tu Perfil no constituye
          un derecho personal de propiedad y no tiene ningún valor fuera de los Servicios. En caso de que se realice
          el reembolso de un Beneficio obtenido por medio de Tokens, Tegger regresará dichos Tokens a tu Perfil. Los
          Tokens son intransferibles. Los Servicios no están disponibles ni pueden ser usados para personas que no
          sean mayores de 18 años, por lo que, si el Usuario no cumple con este requisito no podrá hacer uso de los
          Servicios. Tegger se reserva el derecho de cancelar o dar de baja las cuentas que no cumplan con este
          requisito.
        </Typography>
        <Typography variant={'body2'} component="p">
          Ni Tegger ni sus proveedores son responsables de los daños que podrían resultar al hacer uso de la
          Plataforma.
        </Typography>
        <Typography variant={'body2'} component="p">
          Por lo anterior, Tegger, así como sus empleados, empresas afiliadas, sociedades y proveedores no serán
          responsables, en ningún caso, por cualquier daño directo, especial, incidental, o consecuencias que en
          cualquier forma (incluyendo sin limitación alguna, pérdida de datos, daños por interrupción de negocios, o
          cualquier otra pérdida pecuniaria) se deriven o se relacionen con la Plataforma.
        </Typography>
        <Typography variant={'body2'} component="p">
          Tegger no asume responsabilidad alguna derivada, a título enunciativo, pero no limitativo sobre los
          siguientes supuestos:
        </Typography>
        <Typography variant={'body2'} component="p">
          a. Del uso que los Usuarios puedan hacer de la Plataforma o de terceros, ya sean prohibidos o permitidos,
          en infracción de los derechos de propiedad intelectual y/o de derechos de terceros. b. De los eventuales
          daños y perjuicios a los Usuarios causados por errores o problemas que se generen en el desarrollo o
          instrumentación de los elementos técnicos existentes en la Plataforma. c. Por daños directos, indirectos,
          morales, especiales o consecuenciales que resulten del uso de la Plataforma o de la imposibilidad para
          usarla. d. De los contenidos de aquellas páginas a las que los Usuarios puedan acceder desde enlaces
          incluidos en la Plataforma, ya sean autorizados o no. e. De los actos u omisiones de terceros, con
          independencia de que estos terceros pudiesen estar unidos a Tegger mediante vía contractual. f. Del acceso
          de menores de edad a los contenidos incluidos en la Plataforma, siendo responsabilidad de sus padres o
          tutores ejercer un control adecuado sobre la actividad de los hijos o menores a su cargo o bien instalar
          alguna de las herramientas de control del uso de Internet con el objeto de evitar (i) el acceso a
          materiales o contenidos no aptos para menores, así como (ii) el envío de datos personales sin la previa
          autorización de sus progenitores o tutores. Los Servicios de Tegger pueden ser interrumpidos, incluso por
          razones de mantenimiento, reparaciones o actualizaciones, o por fallos de equipo o la red. Asimismo,
          Tegger podrá descontinuar en cualquier momento algunos o todos sus Servicios, incluyendo algunas funciones
          y la compatibilidad con ciertos dispositivos y plataformas. Adicionalmente, te recordamos que nuestros
          Servicios pueden verse afectados por eventos fuera de nuestro control, como desastres naturales,
          situaciones de emergencia y otros eventos de fuerza mayor sin ninguna responsabilidad atribuible a Tegger.
          En caso de detectar usos inusuales del Servicio, como podrían ser trayectorias inusuales del mouse,
          cantidad de clicks inusuales en tiempo o cualquier otra conducta que nos de a entender que estás haciendo
          un uso abusivo de nuestra Plataforma, tendrá como consecuencia: una disminución en la acumulación de tus
          tokens; de tus Tokens; o bien la cancelación de la totalidad de tus Tokens; o bien; la terminación
          unilateral de nuestros Servicios y por ende la cancelación permanente de tu cuenta.
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Fin de la relación jurídica con Tegger
        <Typography variant={'body2'} component="p">
          Los presentes Términos y Condiciones pueden serán aplicables hasta la extinción de la relación jurídica
          que se derive de alguna de las siguientes razones:
        </Typography>
        <Typography variant={'body2'} component="p">
          a. Cuando el Usuario decida dar de baja su registro en la Plataforma. b. Cuando el Usuario deje de
          utilizar su cuenta en la Plataforma. c. Tegger tiene la facultad de terminar tu acceso a la Plataforma en
          cualquier momento si, tras una investigación, se determina con plena discreción un uso indebido de la
          Plataforma como lo puede ser realizar redenciones con Tokens desde el Perfil de otro Usuario, o utilizar
          tu Perfil para realizar cualquier actividad fraudulenta o ilícita que derive en la acumulación y/o
          redención de Tokens. Los Tokens sólo pueden ser redimidos en el Marketplace establecido por Tegger y no
          son reembolsables ni son canjeables por dinero ni tienen valor monetario alguno.
        </Typography>
        <Typography variant={'body2'} component="p">
          El Usuario reconoce que los presentes Términos y Condiciones serán aplicables en todo momento de la
          relación jurídica al uso que el Usuario haga respecto de la Plataforma.
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Servicios y contenido de Terceros
        <Typography variant={'body2'} component="p">
          En algunos casos, Tegger puede aparecer en enlaces (links) de otros sitios de Internet y/o a otros
          recursos de terceros, no obstante, lo anterior, es necesario aclarar que Tegger no tiene control sobre
          dichos sitios o sus recursos., y por ende, el Usuario reconoce y acepta que Tegger no es ni será
          responsable por la disponibilidad de dichos sitios externos y ajenos o del acceso a los mismos, ni de los
          recursos que éstos utilicen, y no acepta ni aceptará ser considerado como responsable por la imposibilidad
          de acceso a éstos ni de cualquier Contenido, anuncios, productos u otros materiales disponibles en dichos
          sitios o recursos. De la misma forma, Tegger no será responsable por pérdidas o daños causados o
          supuestamente causados de la seguridad sobre dicho Contenido, productos o servicios disponibles en o a
          través de cualquiera de dichos sitios o recursos.
        </Typography>
        <Typography variant={'body2'} component="p">
          Tegger emplea diversas técnicas de seguridad para proteger tus datos de accesos no autorizados. Sin
          embargo, Tegger no puede garantizar la seguridad o confidencialidad absoluta de la información, dado que
          Internet es una red electrónica abierta.
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Obligaciones del Usuario cuando hace uso de los Servicios
        <Typography variant={'body2'} component="p">
          Para hacer uso de los Servicios de Tegger el Usuario tendrá que cumplir con las siguientes obligaciones:
        </Typography>
        <Typography variant={'body2'} component="ul">
          <Typography variant={'body2'} component="li">
            Registrarte y mantener activo tu Perfil.
          </Typography>
          <Typography variant={'body2'} component="li">
            Brindar y mantener tu información exacta correcta y actualizada. Para lo anterior, el Usuario deberá
            realizar las gestiones necesarias para que su información se encuentre debidamente actualizada.
          </Typography>
          <Typography variant={'body2'} component="li">
            Elegir una contraseña robusta alternando el uso de carácter alfanuméricos y mayúsculas
          </Typography>
          <Typography variant={'body2'} component="li">
            Mantener la seguridad y confidencialidad de tu nombre de usuario y contraseña para el uso de los
            Servicios.
          </Typography>
          <Typography variant={'body2'} component="li">
            Adoptar las medidas de seguridad que resulten necesarias para proteger tu información como antivirus,
            firewalls, entre otros.
          </Typography>
          <Typography variant={'body2'} component="li">
            En caso de que detecte una situación anormal relacionada con el uso de tu Perfil deberá notificarlo a
            Tegger a la dirección de correo electrónico <Link
            href="mailto:protección.datos@tegger.io">protección.datos@tegger.io</Link>
          </Typography>
          <Typography variant={'body2'} component="li">
            Utilizar el software y dispositivo que sean adecuados para el uso de los Servicios.
          </Typography>
          <Typography variant={'body2'} component="li">
            Hacer un uso adecuado y lícito de los Servicios.
          </Typography>
          <Typography variant={'body2'} component="li">
            No infringir los derechos de propiedad intelectual sobre la Plataforma y cualquier otro producto
            desarrollado por Tegger.
          </Typography>
          <Typography variant={'body2'} component="li">
            Utilizar los Servicios de acuerdo con lo previsto en estos Términos y Condiciones.
          </Typography>
          <Typography variant={'body2'} component="li">
            No incurrir en cualquier conducta o acción ilícita durante la contratación o uso de la Plataforma.
            En caso de incumplimiento de las referidas Obligaciones, Tegger tendrá derecho a cancelar los Servicios,
            sin previo aviso y/o a cancelar la cuenta del Usuario.
          </Typography>
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Derechos del Usuario
        <Typography variant={'body2'} component="p">
          De acuerdo con lo dispuesto por la Ley Federal de Protección al Consumidor y demás normatividad aplicable,
          como Consumidor tienes los siguientes derechos cuando usas nuestros Servicios:
        </Typography>
        <Typography variant={'body2'} component="p">
          a. Conocer la identidad y datos de contacto de Tegger (ver sección 1) para solicitar aclaraciones o
          presentar reclamaciones. b. Conocer toda la información sobre los términos, condiciones, costos, cargos
          adicionales, en su caso, formas de pago de los bienes y servicios ofrecidos por Tegger. c. Recibir
          información oportuna, completa, clara y veraz en relación con la publicidad y alcance los Servicios. d.
          Elegir de forma libre la contratación de nuestros Servicios. e. Que los servicios que te frecemos sean
          prestados en condiciones de calidad y seguridad. f. No ser discriminado por razón de sexo, raza, religión,
          condición económica, nacionalidad, orientación sexual, por tener alguna discapacidad o cualquier motivo
          similar. g. Derecho a ser compensado o bonificado en los supuestos que resulte procedente. h. Que tus
          datos sean tratados de forma confidencial. i. Acudir a la PROFECO o cualquier otra instancia competente
          para la defensa de tus derechos.
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Privacidad y protección de datos personales
        <Typography variant={'body2'} component="p">
          Tegger sólo recaba información personal de los Usuarios cuando éstos la dan voluntariamente, registrándose
          dentro de la Aplicación y/o a través de nuestro sitio web o navegando en los sitios de nuestros socios
          comerciales mientras tienes habilitadas las funciones que utiliza nuestra Plataforma para obtener tus
          datos.
        </Typography>
        <Typography variant={'body2'} component="p">
          La confidencialidad y efectiva protección de dicha información es primordial para Tegger, quien mantendrá
          una protección adecuada, de conformidad con los principios y obligaciones previstos por la LFPDPPP y demás
          normatividad aplicable, a efecto de asegurar la seguridad, integridad y privacidad de la información
          recabada y tratada en la Aplicación.
        </Typography>
        <Typography variant={'body2'} component="p">
          Para conocer las condiciones generales a las que se sujeta el tratamiento de tus datos personales, así
          como para ejercer los derechos que la normatividad prevé, te aconsejamos consultar nuestro Aviso de
          Privacidad en www.tegger.io
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Propiedad Intelectual
        <Typography variant={'body2'} component="p">
          Las marcas, logotipos, grafismos, fotografías, animaciones, vídeos y textos que figuran en la Plataforma
          son propiedad intelectual de Tegger y/o de sus empresas asociadas o representantes, los cuales están
          protegidos por las leyes mexicanas de propiedad intelectual, y no pueden ser reproducidos parcial o
          totalmente ni utilizados o representados sin la autorización expresa y por escrito de Tegger y/o de sus
          empresas asociadas o representantes, bajo amenaza de acciones legales.
        </Typography>
        <Typography variant={'body2'} component="p">
          Los Servicios y todos los derechos relativos a estos son y permanecerán de la propiedad de Tegger
        </Typography>
        <Typography variant={'body2'} component="p">
          Ninguno de estos Términos y Condiciones ni tu uso de los Servicios te transfieren u otorgan ningún
          derecho:
        </Typography>
        <Typography variant={'body2'} component="ul">
          <Typography variant={'body2'} component="li">
            Sobre o en relación con los Servicios, excepto en cuanto a la licencia limitada otorgada
            anteriormente; o bien
          </Typography>
          <Typography variant={'body2'} component="li">
            A utilizar o mencionar en cualquier modo a los nombres de empresa, logotipos, nombres de producto y
            servicio de Tegger.
          </Typography>
        </Typography>
        <Typography variant={'body2'} component="p">
          Por lo anterior, queda prohibida la modificación, copia, reproducción, descarga, difusión, transmisión,
          explotación comercial y/o distribución de cualquier tipo de contenido, servicios, herramientas, páginas
          del sitio, códigos informáticos o demás elementos que componen la Plataforma.
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Mecanismos para solución de reclamaciones o aclaraciones
        <Typography variant={'body2'} component="p">
          Podrás comunicarnos cualquier queja, reclamación o aclaración ya sea por correo electrónico a la dirección
          <Link href="mailto:protección.datos@tegger.io">protección.datos@tegger.io</Link> y/o por teléfono de lunes a
          viernes en un horario de las 10 am a 7pm hora de la Ciudad de México. En caso de que hayamos recibido tu
          solicitud en días u horas no hábiles, la misma se tendrá por presentada a partir del día hábil siguiente.
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Normatividad y políticas aplicables en caso de controversia
        <Typography variant={'body2'} component="p">
          En caso de controversia, tanto el Usuario como Tegger se someten a las disposiciones de la LFPC y demás
          normatividad que de ella se reconociendo la competencia de la PROFECO para dirimir cualquier controversia
          entre las Partes.
        </Typography>
        <Typography variant={'body2'} component="p">
          Sin perjuicio de lo anterior, en caso de controversia, divergencia, reclamación o duda con motivo de la
          interpretación, aplicación, ejecución, cumplimiento, resolución, rescisión de este acuerdo, así como la
          compensación de los daños y perjuicios resultantes, el Usuario y Tegger se someten expresamente a la
          jurisdicción de los Tribunales de la Ciudad de México, renunciando a cualquier otro fuero que pudiera
          corresponderles por razón de su domicilio presente o futuro.
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Nulidad
        <Typography variant={'body2'} component="p">
          En caso de que cualquier cláusula de los presentes Términos y Condiciones sea declarada nula, las demás
          cláusulas seguirán vigentes y se interpretarán teniendo en cuenta la voluntad de las partes y la finalidad
          misma de los presentes Términos y Condiciones.
        </Typography>
        <Typography variant={'body2'} component="p">
          Tegger podrá no ejercer alguno de los derechos y facultades conferidos en este documento lo que no
          implicará en ningún caso la renuncia a los mismos salvo reconocimiento expreso por parte de Tegger o
          prescripción de la acción que en cada caso corresponda.
        </Typography>
      </Typography>
      <Typography variant={'h2'} component="li">
        Modificación de los términos y condiciones
        <Typography variant={'body2'} component="p">
          Tegger se reserva el derecho de modificar, en cualquier momento, la presentación y configuración de la
          Aplicación, así como de los presentes Términos y Condiciones.
        </Typography>
        <Typography variant={'body2'} component="p">
          Por ello, Tegger recomienda al Usuario leerlos atentamente cada vez que acceda a la Aplicación y/o a
          través de la página www.tegger.io
        </Typography>
        <Typography variant={'body2'} component="p">
          Fecha de actualización: 21 de febrero de 2019.
        </Typography>
      </Typography>
    </Typography>
    </PrivacyBox>
  )
}
