<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 <xsl:template match="/*">
        <xsl:copy>
            <xsl:copy-of select="playlist"/>
            <trackList>
                <xsl:copy-of select="node()"/>
            </trackList>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>