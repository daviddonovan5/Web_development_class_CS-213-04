<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">

<html>
<head>
<title>BSA Rankings</title>
<style>
#heading{
	width: 100%;
	background-color: #4e51ec;
	height: 120px;
  color: white;
  padding-top: 25px;
}
.main,.troop{
	
	background-color: white;
	position: relative;
	top: -50px;

    width: 800px;
    border: 3px solid orange;
    margin-left: auto;
    margin-right: auto;
}
body{
	background-color: #cecff4;
}

.council{
color: blue;
text-align:center;
font family: monospace;
font-size: 2.5em; 
position: relative;
	top: -50px;
}

.troopName{
color: blue;
text-align:center;
font family: monospace;
font-size: 1.8em; 

}
.name{
 font-weight: bold;
}

.phone{position: absolute;
    right: 0px;

}
.address{
 
}

table, th, td{
  border: 1px solid black;
  border-collapse: collapse;
 
  background-color:#fff5e8;
}

th, td {
    padding: 8 px;
     text-align: center;
}

#rank {
position: absolute;
    right: 40%;
    }

#badge{
position: inherit;   }
</style>
</head>
<body>
  <div id="heading">
    <Center> <h1>David Donovan's BSA Rankings</h1></Center>
  </div>

  <div class="main">
    <CENTER><h3 id="insturction"> Rankings and Merit Badages for each scout in the in the following councils:<br/>
    <xsl:for-each select="/bsa/council">
      <xsl:value-of select="@name" /><br/>  
    </xsl:for-each> </h3>
  </CENTER></div>

  <xsl:for-each select="/bsa/council">
    <h1 class="council"><xsl:value-of select="@name" /></h1>
    <xsl:for-each select="troop">
      <div class ="troop"> <p class="troopName"> Troop #<xsl:value-of select="@troopNumber" /> -- <xsl:value-of select="@unitName" /></p>

      <xsl:for-each select="scout">
        <div class = "contact"> <span class="name"><xsl:for-each select="lastName"> <xsl:value-of select="text()"/>, &#160;
      </xsl:for-each>  
      <xsl:for-each select="firstName"> <xsl:value-of select="text()"/> &#160; </xsl:for-each></span> 

      <span class="address"><xsl:for-each select="address">
        <xsl:for-each select="street">
          <xsl:value-of select="text()"/> -&#160;</xsl:for-each> 
          <xsl:for-each select="city">
            <xsl:value-of select="text()"/>, &#160;</xsl:for-each> 
            <xsl:for-each select="state">
              <xsl:value-of select="text()"/> &#160;</xsl:for-each>
            </xsl:for-each></span><!-- for each for the address -->
            <span class="phone">Telephone # &#160; <xsl:for-each select="phone">
              <xsl:value-of select="text()"/><br/></xsl:for-each></span> 

              <table id ="rank">
                <tr>
                  <th>Rank</th>
                  <th>Date Recieved</th> 
                </tr>
                <xsl:for-each select="rank">
                  <tr>
                    <td><xsl:value-of select="text()"/></td>
                    <td><xsl:value-of select="@date_earned"/></td>
                  </tr>
                </xsl:for-each>
              </table>

              <table id ="badge">
                <tr>
                  <th>Merit Badage</th>
                  <th>Date Recieved</th> 
                </tr>
                <xsl:for-each select="meritBadge">
                  <tr>
                    <td><xsl:value-of select="text()"/></td>
                    <td><xsl:value-of select="@date_earned"/></td>
                  </tr>
                </xsl:for-each>
              </table><hr/>
            </div><!-- for contact -->
          </xsl:for-each> <!-- for scout -->
        </div> <!-- div for troop -->
      </xsl:for-each> <!-- for each for troop -->
    </xsl:for-each>  <!-- for each for council -->
  </body>
</html>
</xsl:template>
</xsl:stylesheet>