import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Footer } from '../Component/Footer'
import { Navbar } from '../Component/Navbar'
import { Newsletter } from '../Component/Newsletter'
import { mobile } from '../responsive'



const Container=styled.div``
const Wrapper=styled.div`
display: flex;
padding: 50px;
${mobile({flexDirection:"column"})}
`
const ImageContainer=styled.div`
flex: 1;
`
const Image=styled.img`
width: 40vh;
height: 40vh;
object-fit: cover;
`
const InfoContainer=styled.div`
flex: 1;
padding: 0px 50px;
`
const Title=styled.h1`
font-weight: 200;
`
const Desc=styled.p`
margin: 20px 0px;
`
const Price=styled.h3`
font-weight: 100;
font-size: 40px;
`

const AddContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const AmmountContainer =styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
    

const Ammount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
align-items: center;
display: flex;
justify-content: center;
margin: 0 5px;
`
    
const Button=styled.button`
padding: 15px;
width: 300px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: black;
    color: white;
}
`

export const Product = () => {
    return (
       <Container>
           <Navbar></Navbar>

<Wrapper>
<ImageContainer>
    <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUYGBgZHRoaHRoaGRgYHBocGBkaGhwZHhwcIS4lHB4rIRgYJzgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIANUA7QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYDBQcCAf/EADwQAAIBAgMFBQUHAwQDAQAAAAECAAMRBCExBRJBUWEGInGBkTJCobHwE1JicsHR4aLC8RQjM5IHFrIV/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAB0RAQEBAQEBAAMBAAAAAAAAAAABEQIxIRJBUQP/2gAMAwEAAhEDEQA/AOzREQEREBERA+RI9fFKmRzOthrbmeQ6mQKW1wxuu6yjUo++R1sBmBxt8Zi98y5Vkt8biJjRwQCCCDmCMwQeMjY3aVKl/wAlRV6E5+gzm0TIlZq9tcMDZd9vBbD+oiTW7RUPs/tFcN+C6q3UbrEZy5Ruomjw3aWg+rFL/fFh6i4HnNwjggEEEHQjO8gyREQEREBERAREQEREBERAREQEREBERAREQEREDT7VwZYlt3fUruOnErnmp5i5y48M9dXs/ZoVldXuo0AFr8LNnYDp04SxYjFopAZgC2g4mVfbdcLWLLYeycrG/G9tCeHlOd/z27P361Ov7+mXF45kZlXuLcG3PiT0Dcd3XzM0O3MJvbtRUYK4vnmAQbEA8r5joZmw+Mff33s54BgGAvnkDkOeUn1sc1S28bi2nATtzz+MyOXXWqU9K3jPiOQbjWbvH4GxuM5p61M3m0lSqVYEZeYm22Ntl6DDUofaS+WfFeTfOV5Lg5ayajhhyMzWo6rhcStRQ6G6nQ/Whmec52JtZsO3ND7S/wBw6/P5dBw2IV1DKbqwuDM2LKzRESKREQEREBERAREQEREBERAREQEREBPNxpI+MxQQAnUkKBzJ/QanoJ4fBq1m3jf7wtncfLpAr3anBKpaoHG8RfdYnOxANj4HTpNA+8faYnxvf4y1Y/ZLG7u28xyvoLDTIaGaDE4Yqc/S1v4Im54zUWi1jqRwy5TYJYju6epPjIDJaZcO+7KjZphr3vn/ABNZtDAhQTw/WZNo7fp0EuxztkMrn9vGc+2h2ravUVXd0o73e3L727xt18JL1Is51v33SxCm5GZAIJA6jWYw5GkoFTG2rF6W8gD3QXuVAPdub5nn4mXfZ20lr5EBagzKjIOBqyDgeJXzGVwJ+X3C85422Hqhh1m42LtVqDcSh9pf7l6/OVoZHLWTcPXBHWVHUMHi0qoGpsGB4jmNQeR6GSZzbZmPag++uhsHTg6/ow4Hy0nQ8NiFdQyMGU6EfWR6TNjUrPERIpERAREQEREBERAREQEREBET4YFE27tUtXYKe7Tug5XHtm3iLeQm92FtAHuXyHE6XJ0Hx9JTdsVEGIqhNAx9Tr5b157wOKIORtx85vPjG/XTTNVtHZoYZf4/iY9k7U3xutqLZ+M3Ez9jXqi4nClTY/K3zlZ7S7dTDdzWodB90EXBPkQbfRsf/kPbyYZVRbNWfJR9y+W8f0B8TkJxTE4l2qGoxLNvXO/nc3zDc75y25G+eN+1tV2iWcvUAe/AkgHLIG3CQ9n4c16lmNlGbboANjkADawPjMmOxFFmD0EYKQN6mzG6NxAYHvJyJzm67H7BqFzUe6UyO6t+89yDvfhHC+p4c5y5lttb7zmNfV7MValc08PScpYHfcqFXmWfRRfnmeAMtuzOxgoFXaqajixG7dEUjPK/ecg8TYfhltpsFUKAAo0Vch6cT1Ocx1a3ATtkcNvjSvhAOswtTtoPjNq6SJUSNMQzVPSStmbYq0G3kNwdVN91vHkeokd06TCRCL/sbtVTrMEcfZudLm6seQbLPoRLHOMkS59me097Uq7Z6K549GPPr685mxqVdInyfZFIiICIiAiIgIiICIiB8lZ7V45gUpoSDk5IyOR7vxBPkJZpRe0VS+Ifpuj+gH5kyxnrxXMZhiTvKe9854w1b105fRmxdZDxFDiJqMa2eCxVj9fVpa9l7UuQrHWc+pVDex5zcYera3H606S+tRTu3Owq7Yiq7kl95mW+jISd3d8rDpaxlR//ADqjIKgFwb3+8LG2Y8vETv1qeJpinUPeHsvqVNvrxmr2X2KtWZ6rDc4opuHI0Y/dy8z5XmOprc6sUPsn2VO6tespCnNEINjyZ+nIS5hOV/IDh+kt+06KqllGZyCj6yAmh+yt9ayzE6tvqJuWny0zskxkSjEyzC6SURPDLA1r05GqU5tnpyLUpwy1jLMZEmVEmB0gWXs12nKWpVzdNFc6r0bmvXh4aXtTcXHGcaIli7N9pDRslQlqfA6lPDmvT05SWLK6LExUqgYBlIIIuCMwQeMyzLRERAREQEREBERASgdp13MS/wCMKw/6hfmpl/lU7bYEsq1lGad1vytofI//AFLGevFbRrz4yyNTqSSHBmnNgalxnmnUPHrJJWY2W8mtp+GrESw7P2nujvaevlKph3tJ+Fa5vw4fvLViyNVLm5tflrYcpDrU5ipVpMRg0jTWukwsJsqtKQ3SExFKz4RMrLMbCUY2EwukzNPJECE6SK6TZOsiunWEsa5xMZEmuswMkK2nZ7tA1Bt1rtSJzXit/eX9uM6Nhq61FDowZTmCJx4za7C22+HbLvUz7SfqOTSWJLjqcSJgcalVA6G4PqDyI4GS5loiIgIiICIiAmN0BBBAIORBzBB4TJEDn/aLYRokugvTPDihPA/h5Hy8dGlTO06xUQMCCAQciDmCOUoPaTYBon7RATTvmNSt+B6dZqVi84r9PbCisaLjd03WvkSQDY8jnNkRKTtxLVd7gbfK36TddnNqs7NSfMqLq3Ncsj1F9Y0z5reWkym1gLSIw7w9ZnVpViajybRqzVI8k06kErdI4YTBVpTBSrSahDSNNc6TAyzbVqUhVEgQWExESUyzC4tCMLLMLITpM7AAFmNgM5qcTtB3O5QUgcXt8vr0lH3FulPN3t04+Qmnr7TY5U0J6tl8JtqWwB7bksxzzNz5mZWwoUWAAjE1Xd3ENncDoB/ifRhcSPeB+H6mbWowBznxcUqjMj1vCTWLZHaGvhXDMtlNgwJ7rDqeB5EidY2TtOniKYemctCDqp4qRznMS6utyBunLMofUXvPewMScHWDIb0msrp91eY5hdRyzGhyliy463E8IwIBBuDmCNDee5loiIgIiICIiAmN0BBBAIORBzBHKZIgcx7cdkt1TVpAlOIzJTjfqgPpeVDs4hFfvCzAMCPLUdMp3siUvbPYtd8VsMArA3KHIWOu6eGXunLwhnMaXeznsNIpYhiDkRrw6fpMqvNIlI0zI8ho8zK0omo8mUK01aPJFOpC63dNwZiq0/CRaNWTUqXkaa6qlpExLKilm08s8tM/rnNvVTichx/Ydf5PCaw4A1SKhHcHsA+9+I3Hs3GVwCdTwADRtResbsN2nwUZXHC/T6y0m0wtBUyAtJRp2vIlUm/d9ZUT7Igu58uLeA/fKaPau0d/JFCKORuT4n9B8Z8xdTUkkk8Sb385rXF/a05fvGp8QmcsbKCfDT1j/RE+01ug19f4ks1LDQBRn5DpKjiu2eZ+zpgjgzsRfrugZesJ74tdJN24DPY6i5APkLTOHlIo9sanvUkPQFh8TvfKWvBYr7RA+6VvwNr3GufHxkLsXnsntmxFBzkfYPI/c8OXpytc5xtapBBBsRnkdJ1TYmO+2oJU4kWP5lO63xElWVsYiJGiIiAiIgIiICIiBUu1exL/AO+gzGbD+7w5+vOVRH8jOrGVnb/Z8P36Qsw1UfoB8vTkbKzYqqmZUaRrkGxFiOE9q0qJSNMyPIqNMiNKJyPJCVTfUW434dfCa5HkPauKNhSQ959TyX6+VuMLrfbOcYupu2P2KZm4tvty8OY5C3OW2pSBFreEpuzMaKW6q5AcpbcJiw4yksWXWoq7LZnyFl4m9vQcpqNuhaQ3Qcz6+I/mb7bW2logqLM9sl6nnyA19Jz7FVXqsWYliTcnn+w6RqWIG0doombE97IAAsxtyHzJsM57pvdQ18iAeswphHFcVBYjd3N0jhe5FuIJsT4TJibKMhYDQCERNsBnoVFRbsylQLj3rKTfoCZTP/V8Ta+4vhvpf5y5pWIOdh+Y2+AzkpHP4SPwm8qbYqHZ3s6xq3xCMqJmVOW+eCAjKx4kaC/G0v2CQO4BCAAE7pYU0so9gH3RbIW6SGx5T1fnBupuPK7iZoe7lurZlUsSFcgAMwFswBrLt2IW2FHVnPo1v0nORUDC6kEcwQR8J1LsxS3cLSHNd7/uS/8AdJV59baIiZbIiICIiAiIgIiICIiBW+0OwRU79MWcZkD3v5+fjKWSQxUixGonV5Xe0WwBVG+gtUH9X8/OWVmxT0aZVaRhcEqciJ7VpUSTUsCToBf0mkoV+81Rh7RIHQD6+Akja9crTsNWIA9f8TNQwo3AvQSle6NW+nGbmntZqNMhSN5rAW4Hz5WMr1JCjEHQC/K0y1qxbvnU5DICw4mwyEto8V6hYkkksdTe5JM+4RO8AZSO2W12v9gjEWALkG17+yvhbM+IkvsYjqhqM7ldEUkkZWuwB05esh+tdTfZyBN4ZnKwGeumXEk5AfoDK3tDBFGIIBbjxCn7vIsJN2ZtQqQXJ3m0J9wH2mH4t0ADlczf4ulTqUy4ISmgzIztbh1b94X1zbF4dtQCT0/fhMWCR73OnMXPx0M+doNuqjFEXIcW/UcTNJ/r2qZ75bzOXlwkvROVqd7Z8hnKDtbaz1mILEJwQZC3W2p8Zu6uOcUKoJuVGROveyteaHYOD+2ropHdHeb8q5n1yHnG/EnOVediYIinRpKLMwUW/E5v82nbqNIKqqNFAA8ALCUDsRgPtKxqsO7T0/O2noLnzE6HJV5/r7ERI0REQEREBERAREQEREBERArvaHYIqgvTFqgz/N/PzlIa6khhZhqJ1iV3tHsEVQXQWcajTe/n5yypY5ztJt56S9SZvAuU01fDOaqXX2d4E8Ac9evSbhHymmaiV6d2+ucjY7EBFZ29lFJ8lH8Sa+QJlf7Q0neg6ICWfdFszlvC+XhIjnpvUdncnedr24lmOn1ynTcNhwiJTGihU8+J8zeVvYvZcoyvWIupvuDPMZi54cNJZ6t7XGozEq9WX5HjHu3eKDO9gOug/See0GNelQShvZizEBge97zG3vcLcBPeGfvi+hN/Xh6zTbbfeqG/L4ZydX4ce40aN/qCEtdybKcrEcj16zw+z6tByHUqQbMDfIjgeU9thwjBlNra5/ES7bPrJjEWlWIFawVKp0qAaI558m8pzjtfqonAVK1EhCoLMCbsRkugBA10Oc2/ZvY7Uk3bb1WoQLDPjZUB455nhpymOthHw1QqwIsbMCNJ0b/x9spGBxLEM1yqC993mx5Mb5dD1m5mOVl1atg7NGHorTGZ1Y82PtHw4DoBNnESNEREBERAREQEREBERAREQEREBERAr3aDYu+DUpjvjUD3v5+cpO/Y+foeU6tK32g2EKl3QWf3gNH6/m+csrNmqdij3ZEw+Hdyd0XtmTwA5k8BM1W4G6dRwn3BY37MEblySM94gbvFSvvA+PGVn5v1ixGHZCVa1+huPI8RIlfFIlt91TeyG8wW/heZdsbRRVeqwCqLndXIZnJR5mwnN8bi/tnLubk5AZ2UcFA5Skm10N6qWzZbc7i3rIGLwqVgG3r8mVrHwuMjOfuA3dVQL9APjOhbJw+5TRNLKL+JzPzkXMa3F7MWmhdRvv7u9mBcgbxGWguZMoYHdQPv7xY3I96/E5AL6Se7y2dnux7PapiQVXUU9Gb854D8OvO2hiy1pkx9KtS3cSxDovcqAbxdR7jjj48Ji7A4+ouMWnS/46l99eAVVJ3uhB+duMuW2Ow1Grc0mNC+qqoK+S3G75G3STeznZijgwSl2dhZqjWvb7oA9kfRJsJlvVhiIlQiIgIiICIiAiIgIiICIiAiIgIiICfJ9iBWNv8AZkVLvRsj6ldFfj5N1/zKLiaDoxR1KMNQRbzHMdZ2CRcZgadUbtRFYdRmPA6jyl1m865BUpqwKsAynUEXB8prX7PYYm/2dvBmA9AbTqlfsVQY3VnToCpHxF/jMlDsbhl133/M1h/SBLpJXKaGxsOhG5SW98r7zm/CwYn4Sz4Ds1ia2e7uKfee6+i+0fS3WdGwmzqVL/jpovUKL+Z1MmSaZ/Vf2H2Vo0CHP+5UHvsMl/Iui+OZ6ywxEjRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q=="></Image>
    </ImageContainer>


          
           <InfoContainer>
               <Title>DC Motor 250 Volt with Metalic Gear Box</Title>
<Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nobis, officiis fuga eligendi ducimus ea iusto, ipsa vel quibusdam numquam quas at quis odio architecto similique labore velit, deleniti reprehenderit?</Desc>
<Price>Rs. 500</Price>

<AddContainer>
    <AmmountContainer>
       <Remove></Remove>
       <Ammount>1</Ammount>
       <Add></Add>
    </AmmountContainer>
    <Button>Add To Cart</Button>
</AddContainer>

           </InfoContainer>
           </Wrapper>





           <Newsletter></Newsletter>
           <Footer></Footer>

       </Container>
    )
}
