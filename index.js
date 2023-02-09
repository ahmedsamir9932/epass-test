var os = require('os');
if (os.platform() == 'win32') {  
    if (os.arch() == 'ia32') {
        var chilkat = require('@chilkat/ck-node17-win-ia32');
    } else {
        var chilkat = require('@chilkat/ck-node17-win64'); 
    }
} else if (os.platform() == 'linux') {
    if (os.arch() == 'arm') {
        var chilkat = require('@chilkat/ck-node17-arm');
    } else if (os.arch() == 'x86') {
        var chilkat = require('@chilkat/ck-node17-linux32');
    } else {
        var chilkat = require('@chilkat/ck-node17-linux64');
    }
} else if (os.platform() == 'darwin') {
    var chilkat = require('@chilkat/ck-node17-macosx');
}

function chilkatExample() {

    // This example assumes the Chilkat API to have been previously unlocked.
    // See Global Unlock Sample for sample code.

    var crypt = new chilkat.Crypt2();
    crypt.VerboseLogging = true;

    var cert = new chilkat.Cert();
    cert.VerboseLogging = true;

    // Set the smart card PIN, which will be needed for signing.
    cert.SmartCardPin = "12345678";

    // There are many ways to load the certificate.  
    // This example was created for a customer using an ePass2003 USB token.
    // Assuming the USB token is the only source of a hardware-based private key..
    var success = cert.LoadFromSmartcard("");
    if (success !== true) {
        console.log(cert.LastErrorText);
        return;
    }

    // Tell the crypt class to use this cert.
    success = crypt.SetSigningCert(cert);
    if (success !== true) {
        console.log(crypt.LastErrorText);
        return;
    }

    var cmsOptions = new chilkat.JsonObject();
    // Setting "DigestData" causes OID 1.2.840.113549.1.7.5 (digestData) to be used.
    cmsOptions.UpdateBool("DigestData",true);
    cmsOptions.UpdateBool("OmitAlgorithmIdNull",true);

    // Indicate that we are passing normal JSON and we want Chilkat do automatically
    // do the ITIDA JSON canonicalization:
    cmsOptions.UpdateBool("CanonicalizeITIDA",true);

    crypt.CmsOptions = cmsOptions.Emit();

    // The CadesEnabled property applies to all methods that create CMS/PKCS7 signatures. 
    // To create a CAdES-BES signature, set this property equal to true. 
    crypt.CadesEnabled = true;

    crypt.HashAlgorithm = "sha256";

    var jsonSigningAttrs = new chilkat.JsonObject();
    jsonSigningAttrs.UpdateInt("contentType",1);
    jsonSigningAttrs.UpdateInt("signingTime",1);
    jsonSigningAttrs.UpdateInt("messageDigest",1);
    jsonSigningAttrs.UpdateInt("signingCertificateV2",1);
    crypt.SigningAttributes = jsonSigningAttrs.Emit();

    // By default, all the certs in the chain of authentication are included in the signature.
    // If desired, we can choose to only include the signing certificate:
    crypt.IncludeCertChain = false;

    // Pass a JSON document such as the following.  Chilkat will do the ITIDA canonicalization.
    // (It is the canonicalized JSON that gets signed.)

    //       {
    //          "issuer":{
    //             "address":{
    //                "branchID":"0",
    //                "country":"EG",
    //                "regionCity":"Cairo",
    //                "postalCode":"",
    //                "buildingNumber":"0",
    //                "street":"123rd Street",
    //                "governate":"GOVERNATE"
    //             },
    //             "type":"B",
    //             "id":"209999899",
    //             "name":"Xyz SAE"
    //          },
    //          "receiver":{
    //             "address":{
    //                "country":"EG",
    //                "regionCity":"CAIRO",
    //                "postalCode":"11435",
    //                "buildingNumber":"0",
    //                "street":"Autostrad Road Abc",
    //                "governate":"GOVERNATE"
    //             },
    //             "type":"B",
    //             "id":"999999999",
    //             "name":"XYZ EGYPT FOR TRADE"
    //          },
    //          "documentType":"I",
    //          "documentTypeVersion":"1.0",
    //          "dateTimeIssued":"2020-11-15T11:04:53Z",
    //          "taxpayerActivityCode":"1073",
    //          "internalID":"ZZZZ999",
    //          "purchaseOrderReference":"2009199918",
    //          "salesOrderReference":"",
    //          "payment":{
    //             "bankName":"",
    //             "bankAddress":"",
    //             "bankAccountNo":"",
    //             "bankAccountIBAN":"",
    //             "swiftCode":"",
    //             "terms":""
    //          },
    //          "delivery":{
    //             "approach":"",
    //             "packaging":"",
    //             "dateValidity":"",
    //             "exportPort":"",
    //             "countryOfOrigin":"EG",
    //             "grossWeight":0,
    //             "netWeight":0,
    //             "terms":""
    //          },
    //          "invoiceLines":[
    //             {
    //                "description":"CDM Widget 48GX99X12BA",
    //                "itemType":"GS1",
    //                "itemCode":"7622213335056",
    //                "unitType":"CS",
    //                "quantity":1.00,
    //                "unitValue":{
    //                   "currencySold":"EGP",
    //                   "amountEGP":588.67,
    //                   "amountSold":0,
    //                   "currencyExchangeRate":0
    //                },
    //                "salesTotal":588.67,
    //                "total":603.97,
    //                "valueDifference":0,
    //                "totalTaxableFees":0,
    //                "netTotal":529.8,
    //                "itemsDiscount":0,
    //                "discount":{
    //                   "rate":10.00,
    //                   "amount":58.87
    //                },
    //                "taxableItems":[
    //                   {
    //                      "taxType":"T1",
    //                      "amount":74.17,
    //                      "subType":"No sub",
    //                      "rate":14.00
    //                   }
    //                ],
    //                "internalCode":"9099994"
    //             }
    //          ],
    //          "totalSales":588.67,
    //          "totalSalesAmount":588.67,
    //          "totalDiscountAmount":58.87,
    //          "netAmount":529.80,
    //          "taxTotals":[
    //             {
    //                "taxType":"T1",
    //                "amount":74.17
    //             }
    //          ],
    //          "extraDiscountAmount":0,
    //          "totalItemsDiscountAmount":0,
    //          "totalAmount":603.97,
    //       }

    // Build the above JSON..

    // Use this online tool to generate code from sample JSON: 
    // Generate Code to Create JSON

    var json = new chilkat.JsonObject();
    json.UpdateString("issuer.address.branchID","0");
    json.UpdateString("issuer.address.country","EG");
    json.UpdateString("issuer.address.regionCity","Cairo");
    json.UpdateString("issuer.address.postalCode","");
    json.UpdateString("issuer.address.buildingNumber","0");
    json.UpdateString("issuer.address.street","123rd Street");
    json.UpdateString("issuer.address.governate","GOVERNATE");
    json.UpdateString("issuer.type","B");
    json.UpdateString("issuer.id","209999899");
    json.UpdateString("issuer.name","Xyz SAE");
    json.UpdateString("receiver.address.country","EG");
    json.UpdateString("receiver.address.regionCity","CAIRO");
    json.UpdateString("receiver.address.postalCode","11435");
    json.UpdateString("receiver.address.buildingNumber","0");
    json.UpdateString("receiver.address.street","Autostrad Road Abc");
    json.UpdateString("receiver.address.governate","GOVERNATE");
    json.UpdateString("receiver.type","B");
    json.UpdateString("receiver.id","999999999");
    json.UpdateString("receiver.name","XYZ EGYPT FOR TRADE");
    json.UpdateString("documentType","I");
    json.UpdateString("documentTypeVersion","1.0");
    json.UpdateString("dateTimeIssued","2020-11-15T11:04:53Z");
    json.UpdateString("taxpayerActivityCode","1073");
    json.UpdateString("internalID","ZZZZ999");
    json.UpdateString("purchaseOrderReference","2009199918");
    json.UpdateString("salesOrderReference","");
    json.UpdateString("payment.bankName","");
    json.UpdateString("payment.bankAddress","");
    json.UpdateString("payment.bankAccountNo","");
    json.UpdateString("payment.bankAccountIBAN","");
    json.UpdateString("payment.swiftCode","");
    json.UpdateString("payment.terms","");
    json.UpdateString("delivery.approach","");
    json.UpdateString("delivery.packaging","");
    json.UpdateString("delivery.dateValidity","");
    json.UpdateString("delivery.exportPort","");
    json.UpdateString("delivery.countryOfOrigin","EG");
    json.UpdateInt("delivery.grossWeight",0);
    json.UpdateInt("delivery.netWeight",0);
    json.UpdateString("delivery.terms","");
    json.UpdateString("invoiceLines[0].description","CDM Widget 48GX99X12BA");
    json.UpdateString("invoiceLines[0].itemType","GS1");
    json.UpdateString("invoiceLines[0].itemCode","7622213335056");
    json.UpdateString("invoiceLines[0].unitType","CS");
    json.UpdateNumber("invoiceLines[0].quantity","1.00");
    json.UpdateString("invoiceLines[0].unitValue.currencySold","EGP");
    json.UpdateNumber("invoiceLines[0].unitValue.amountEGP","588.67");
    json.UpdateInt("invoiceLines[0].unitValue.amountSold",0);
    json.UpdateInt("invoiceLines[0].unitValue.currencyExchangeRate",0);
    json.UpdateNumber("invoiceLines[0].salesTotal","588.67");
    json.UpdateNumber("invoiceLines[0].total","603.97");
    json.UpdateInt("invoiceLines[0].valueDifference",0);
    json.UpdateInt("invoiceLines[0].totalTaxableFees",0);
    json.UpdateNumber("invoiceLines[0].netTotal","529.8");
    json.UpdateInt("invoiceLines[0].itemsDiscount",0);
    json.UpdateNumber("invoiceLines[0].discount.rate","10.00");
    json.UpdateNumber("invoiceLines[0].discount.amount","58.87");
    json.UpdateString("invoiceLines[0].taxableItems[0].taxType","T1");
    json.UpdateNumber("invoiceLines[0].taxableItems[0].amount","74.17");
    json.UpdateString("invoiceLines[0].taxableItems[0].subType","No sub");
    json.UpdateNumber("invoiceLines[0].taxableItems[0].rate","14.00");
    json.UpdateString("invoiceLines[0].internalCode","9099994");
    json.UpdateNumber("totalSales","588.67");
    json.UpdateNumber("totalSalesAmount","588.67");
    json.UpdateNumber("totalDiscountAmount","58.87");
    json.UpdateNumber("netAmount","529.80");
    json.UpdateString("taxTotals[0].taxType","T1");
    json.UpdateNumber("taxTotals[0].amount","74.17");
    json.UpdateInt("extraDiscountAmount",0);
    json.UpdateInt("totalItemsDiscountAmount",0);
    json.UpdateNumber("totalAmount","603.97");

    json.EmitCompact = true;
    var jsonToSign = json.Emit();
    console.log({jsonToSign});

    // Create the CAdES-BES signature.
    crypt.EncodingMode = "base64";

    // Make sure we sign the utf-8 byte representation of the JSON string
    crypt.Charset = "utf-8";

    var sigBase64 = crypt.SignStringENC({jsonToSign});
    if (crypt.LastMethodSuccess == false) {
        console.log(crypt.LastErrorText);
        return;
    }

    console.log("Base64 signature:");
    console.log({sigBase64});

    // Insert the base64 signature into the JSON to be sent
    json.UpdateString("signatures[0].signatureType","I");
    json.UpdateString("signatures[0].value",sigBase64);
    // debugger;
    // Wrap the JSON in  {"documents":[ ... ]}
    var sbToSend = new chilkat.StringBuilder();
    sbToSend.Append("{\"documents\":[");
    sbToSend.Append(json.Emit());
    sbToSend.Append("]}");
    console.log('json emit', json.Emit());
    console.log({sbToSend});
    return sbToSend;

    /* 

    // ------------------------------------------------------------------------
    // Get an access token using our client ID and client secret key
    var clientId = "abc999ff-1234";
    var clientSecretKey = "123fff22-1234-abcd";

    var http = new chilkat.Http();

    // Causes the Authorization: Basic header to be added..
    http.Login = clientId;
    http.Password = clientSecretKey;
    http.BasicAuth = true;

    var req = new chilkat.HttpRequest();
    req.HttpVerb = "POST";
    req.Path = "/connect/token";
    req.ContentType = "application/x-www-form-urlencoded";
    req.AddParam("grant_type","client_credentials");
    req.AddHeader("Connection","close");

    http.Accept = "application/json";

    // resp: HttpResponse
    var resp = http.PostUrlEncoded("https://id.preprod.eta.gov.eg/connect/token",req);
    if (http.LastMethodSuccess == false) {
        console.log(http.LastErrorText);
        return;
    }

    http.CloseAllConnections();

    console.log("Response status code: " + resp.StatusCode);
    console.log("Response body:");
    console.log(resp.BodyStr);

    if (resp.StatusCode !== 200) {
        console.log("Failed.");

        return;
    }

    var jsonToken = new chilkat.JsonObject();
    success = jsonToken.Load(resp.BodyStr);

    var accessToken = jsonToken.StringOf("access_token");
    console.log("access_token = " + accessToken);

    // ------------------------------------------------------------------------
    // Submit the signed JSON to the ETA (Egypt Tax Authority) Portal

    // No longer sending basic authentication...
    http.Login = "";
    http.Password = "";
    http.BasicAuth = false;

    // Setting the AuthToken property causes the "Authorization: Bearer <token>" header to be added to each request.
    http.AuthToken = accessToken;

    // resp = http.PostJson2("https://api.preprod.invoicing.eta.gov.eg/api/v1/documentsubmissions","application/json; charset=utf-8",sbToSend.GetAsString());
    // if (http.LastMethodSuccess == false) {
    //     console.log(http.LastErrorText);
    //     return;
    // }

    console.log("Response status code: " + resp.StatusCode);
    console.log("Response body:");
    console.log(resp.BodyStr);

    */
}

const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening


app.use(express.static(__dirname + '/frontend'));
// app.get('/*', function(req,res) {
//     res.sendFile(path.join(__dirname+'/frontend/index.html'));
// });

const cors = require('cors');
app.use(cors({
    origin: '*'
}));


//Idiomatic expression in express to route and respond to a client request
app.get('/epass', (req, res) => {        //get requests to the root ("/") will route here
    // res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
    // console.log('chilkat final; response', chilkatExample());
    const chilkatResponse = chilkatExample();
    if(!chilkatResponse) {
    //   res.errored({StatusCode: 404, message: 'not found smart', success: false, data: null});
    // throw new Error('No Smart Card Found, Try Agian');
    return res.status(500).send({statusCode: 500, message: 'No Smart Card Found, Try Agian', success: false, data: null});  
    } else {
        res.send({statusCode: 200, message: 'success', success: true, data: chilkatResponse});  
    }                                                  
    //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});


// chilkatExample();












