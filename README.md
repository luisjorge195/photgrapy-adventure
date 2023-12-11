La aplicación utiliza AWS Cognito para gestionar las credenciales y la autenticación, proporcionando una capa de seguridad robusta. Además, se utiliza Firebase para el almacenamiento de imágenes y Firestore como base de datos en tiempo real. Aunque el sistema de autenticación está basado en AWS Cognito, hubiera sido super interasente seguir sacando provecho de cognito ya que permitia implementar la confirmación del inicio de sesión a través de mensajes de texto a un celular registrado pero eso iba a generar costo.

Características Principales
Autenticación Segura: El sistema de autenticación se basa en AWS Cognito, garantizando un entorno seguro y confiable.

Almacenamiento de Imágenes con Firebase: Firebase se utiliza para el almacenamiento eficiente y seguro de las imágenes cargadas por los usuarios.

Firestore para Base de Datos en Tiempo Real: Firestore sirve como la base de datos en tiempo real, permitiendo la gestión dinámica de datos, como la lista de imágenes compartidas y sus respectivos comentarios.

Subida de Fotografías: La aplicación permite a los usuarios cargar sus fotografías de manera sencilla.

Funcionalidad de Like: Los usuarios pueden dar "like" a las fotografías compartidas por otros usuarios.

Lista de Fotografías Compartidas: Se presenta una lista de las fotografías compartidas, junto con sus respectivos comentarios.
