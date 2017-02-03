<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
  <xsl:template match="/CANDIDATOS"> 
    <xsl:for-each select="CURRICULUM">
		<xsl:if test="FORMACION/CURSOS/@numero&gt;2">
			<xsl:if test="FORMACION/IDIOMAS/@numero&gt;3">
				<xsl:if test="EXPERIENCIALABORAL/@numero&gt;2">
					<xsl:if test="SKILLS/PERSONALES/@numero&gt;3">
						<xsl:if test="SKILLS/PROFESIONALES/@numero&gt;5">
						  <HTML>
							  <BODY>
  								<TABLE border="1">
      					  
      						  <h1><b><center>CURRICULUM VITAE</center></b></h1>
      						  <br></br>
      						  <br></br>
      					  
        						<tr><td colspan="6"><h1><b><center>DATOS PERSONALES</center></b></h1><br></br></td></tr>
        						<tr>
        						  <td>Nombre:</td>
        						  <td>DNI:</td>
        						  <td>Telefono:</td>
        						  <td>Correo:</td>
        						  <td>Direccion:</td>
        						  <td>Codigo postal:</td>
        						</tr>
        						<tr>
        						  <td><xsl:value-of select="NOMBRE"/></td>
        						  <td><xsl:value-of select="DNI"/></td>
        						  <td><xsl:value-of select="TELEFONO"/></td>
        						  <td><xsl:value-of select="CORREO"/></td>
        						  <td><xsl:value-of select="DIRECCION/CALLE"/> Nº<xsl:value-of select="DIRECCION/NUMERO"/>, <xsl:value-of select="DIRECCION/LOCALIDAD"/>, <xsl:value-of select="DIRECCION/PROVINCIA"/>, <xsl:value-of select="DIRECCION/PAIS"/></td>
        						  <td><xsl:value-of select="DIRECCION/CP"/></td>
        						</tr>
      					  
      						  <tr><td colspan="5"><h1><b><center>FORMACIÓN</center></b></h1><br></br></td></tr>
      						  <tr>
      						  	<td>Bachillerato cursado en:</td>
      						  	<td>Grado cursado en:</td>
      						  	<td>Master cursado en:</td>
      						  	<td>Idiomas:</td>
      						  	<td>Cursos:</td>
      						  </tr>
      						  <tr>
      						  	<td><xsl:value-of select="FORMACION/ESTUDIOS/BACHILLER"/></td>
      							  <td><xsl:value-of select="FORMACION/ESTUDIOS/UNIVERSIDAD"/></td>
      							  <td><xsl:value-of select="FORMACION/ESTUDIOS/MASTER"/></td>
      						  	<td><xsl:value-of select="FORMACION/IDIOMAS"/></td>
      						  	<td><xsl:value-of select="FORMACION/CURSOS"/></td>
      						  </tr>
      							<br></br>
      					  
      					  
      					     <tr><td colspan="5"><h1><b><center>EXPERIENCIA</center></b></h1><br></br></td></tr>
      							
      						  <tr>
      						  	<td>Experiencia en:</td>
      						  </tr>
      						  <tr>
      							  <td><xsl:value-of select="EXPERIENCIALABORAL"/></td>
      						  </tr>
      							<br></br>
      
      							<tr><td colspan="5"><h1><b><center>SKILLS</center></b></h1><br></br></td></tr>
      							
      						  <tr>
      						  	<td>Personales:</td>
      						  	<td>Profesionales:</td>
      						  </tr>
      						  <tr>
      							  <td><xsl:value-of select="SKILLS/PERSONALES"/></td>
      						  	<td><xsl:value-of select="SKILLS/PROFESIONALES"/></td>
      						  </tr>
      							<br></br>
      						  
      							<tr><td colspan="5"><h1><b><center>ESPECIALIZACION</center></b></h1><br></br></td></tr>
      							
      						  <tr>
      						    <td>Especializado en:</td>
      							
      						  </tr>
      						  <tr>
      						  	<td><xsl:value-of select="SKILLS/PERSONALES"/></td>
      						  </tr>
      							<br></br>
						  
					  
						  	  </TABLE>
						  	</BODY>
						  </HTML>
						</xsl:if>
					</xsl:if>
				</xsl:if>
			</xsl:if>
		</xsl:if>
      </xsl:for-each>
    </xsl:template>
 </xsl:stylesheet>
