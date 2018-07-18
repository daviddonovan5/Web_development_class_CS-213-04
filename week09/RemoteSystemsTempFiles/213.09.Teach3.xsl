<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="directory">
  <html>
  <body>
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Size</th>
        <th>Type</th>
      </tr>
      <xsl:for-each select="file">
      <tr>
        <td><xsl:value-of select="@name"/></td>
        <td><xsl:value-of select="@size"/></td>
        <td><xsl:value-of select="@type"/></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>
