import { FcGoogle } from "react-icons/fc";
import { BsFillSkipEndCircleFill } from "react-icons/bs";
import { signIn, signOut } from "next-auth/react"
import {useSession} from "next-auth/react";
import StripeCheckout from 'react-stripe-checkout'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";


const dat = [ 
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}, 
    {name: 'Antigua and Barbuda', code: 'AG'}, 
    {name: 'Argentina', code: 'AR'}, 
    {name: 'Armenia', code: 'AM'}, 
    {name: 'Aruba', code: 'AW'}, 
    {name: 'Australia', code: 'AU'}, 
    {name: 'Austria', code: 'AT'}, 
    {name: 'Azerbaijan', code: 'AZ'}, 
    {name: 'Bahamas', code: 'BS'}, 
    {name: 'Bahrain', code: 'BH'}, 
    {name: 'Bangladesh', code: 'BD'}, 
    {name: 'Barbados', code: 'BB'}, 
    {name: 'Belarus', code: 'BY'}, 
    {name: 'Belgium', code: 'BE'}, 
    {name: 'Belize', code: 'BZ'}, 
    {name: 'Benin', code: 'BJ'}, 
    {name: 'Bermuda', code: 'BM'}, 
    {name: 'Bhutan', code: 'BT'}, 
    {name: 'Bolivia', code: 'BO'}, 
    {name: 'Bosnia and Herzegovina', code: 'BA'}, 
    {name: 'Botswana', code: 'BW'}, 
    {name: 'Bouvet Island', code: 'BV'}, 
    {name: 'Brazil', code: 'BR'}, 
    {name: 'British Indian Ocean Territory', code: 'IO'}, 
    {name: 'Brunei Darussalam', code: 'BN'}, 
    {name: 'Bulgaria', code: 'BG'}, 
    {name: 'Burkina Faso', code: 'BF'}, 
    {name: 'Burundi', code: 'BI'}, 
    {name: 'Cambodia', code: 'KH'}, 
    {name: 'Cameroon', code: 'CM'}, 
    {name: 'Canada', code: 'CA'}, 
    {name: 'Cape Verde', code: 'CV'}, 
    {name: 'Cayman Islands', code: 'KY'}, 
    {name: 'Central African Republic', code: 'CF'}, 
    {name: 'Chad', code: 'TD'}, 
    {name: 'Chile', code: 'CL'}, 
    {name: 'China', code: 'CN'}, 
    {name: 'Christmas Island', code: 'CX'}, 
    {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {name: 'Colombia', code: 'CO'}, 
    {name: 'Comoros', code: 'KM'}, 
    {name: 'Congo', code: 'CG'}, 
    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {name: 'Cook Islands', code: 'CK'}, 
    {name: 'Costa Rica', code: 'CR'}, 
    {name: 'Cote D\'Ivoire', code: 'CI'}, 
    {name: 'Croatia', code: 'HR'}, 
    {name: 'Cuba', code: 'CU'}, 
    {name: 'Cyprus', code: 'CY'}, 
    {name: 'Czech Republic', code: 'CZ'}, 
    {name: 'Denmark', code: 'DK'}, 
    {name: 'Djibouti', code: 'DJ'}, 
    {name: 'Dominica', code: 'DM'}, 
    {name: 'Dominican Republic', code: 'DO'}, 
    {name: 'Ecuador', code: 'EC'}, 
    {name: 'Egypt', code: 'EG'}, 
    {name: 'El Salvador', code: 'SV'}, 
    {name: 'Equatorial Guinea', code: 'GQ'}, 
    {name: 'Eritrea', code: 'ER'}, 
    {name: 'Estonia', code: 'EE'}, 
    {name: 'Ethiopia', code: 'ET'}, 
    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {name: 'Faroe Islands', code: 'FO'}, 
    {name: 'Fiji', code: 'FJ'}, 
    {name: 'Finland', code: 'FI'}, 
    {name: 'France', code: 'FR'}, 
    {name: 'French Guiana', code: 'GF'}, 
    {name: 'French Polynesia', code: 'PF'}, 
    {name: 'French Southern Territories', code: 'TF'}, 
    {name: 'Gabon', code: 'GA'}, 
    {name: 'Gambia', code: 'GM'}, 
    {name: 'Georgia', code: 'GE'}, 
    {name: 'Germany', code: 'DE'}, 
    {name: 'Ghana', code: 'GH'}, 
    {name: 'Gibraltar', code: 'GI'}, 
    {name: 'Greece', code: 'GR'}, 
    {name: 'Greenland', code: 'GL'}, 
    {name: 'Grenada', code: 'GD'}, 
    {name: 'Guadeloupe', code: 'GP'}, 
    {name: 'Guam', code: 'GU'}, 
    {name: 'Guatemala', code: 'GT'}, 
    {name: 'Guernsey', code: 'GG'}, 
    {name: 'Guinea', code: 'GN'}, 
    {name: 'Guinea-Bissau', code: 'GW'}, 
    {name: 'Guyana', code: 'GY'}, 
    {name: 'Haiti', code: 'HT'}, 
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
    {name: 'Holy See (Vatican City State)', code: 'VA'}, 
    {name: 'Honduras', code: 'HN'}, 
    {name: 'Hong Kong', code: 'HK'}, 
    {name: 'Hungary', code: 'HU'}, 
    {name: 'Iceland', code: 'IS'}, 
    {name: 'India', code: 'IN'}, 
    {name: 'Indonesia', code: 'ID'}, 
    {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {name: 'Iraq', code: 'IQ'}, 
    {name: 'Ireland', code: 'IE'}, 
    {name: 'Isle of Man', code: 'IM'}, 
    {name: 'Israel', code: 'IL'}, 
    {name: 'Italy', code: 'IT'}, 
    {name: 'Jamaica', code: 'JM'}, 
    {name: 'Japan', code: 'JP'}, 
    {name: 'Jersey', code: 'JE'}, 
    {name: 'Jordan', code: 'JO'}, 
    {name: 'Kazakhstan', code: 'KZ'}, 
    {name: 'Kenya', code: 'KE'}, 
    {name: 'Kiribati', code: 'KI'}, 
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
    {name: 'Korea, Republic of', code: 'KR'}, 
    {name: 'Kuwait', code: 'KW'}, 
    {name: 'Kyrgyzstan', code: 'KG'}, 
    {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
    {name: 'Latvia', code: 'LV'}, 
    {name: 'Lebanon', code: 'LB'}, 
    {name: 'Lesotho', code: 'LS'}, 
    {name: 'Liberia', code: 'LR'}, 
    {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
    {name: 'Liechtenstein', code: 'LI'}, 
    {name: 'Lithuania', code: 'LT'}, 
    {name: 'Luxembourg', code: 'LU'}, 
    {name: 'Macao', code: 'MO'}, 
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {name: 'Madagascar', code: 'MG'}, 
    {name: 'Malawi', code: 'MW'}, 
    {name: 'Malaysia', code: 'MY'}, 
    {name: 'Maldives', code: 'MV'}, 
    {name: 'Mali', code: 'ML'}, 
    {name: 'Malta', code: 'MT'}, 
    {name: 'Marshall Islands', code: 'MH'}, 
    {name: 'Martinique', code: 'MQ'}, 
    {name: 'Mauritania', code: 'MR'}, 
    {name: 'Mauritius', code: 'MU'}, 
    {name: 'Mayotte', code: 'YT'}, 
    {name: 'Mexico', code: 'MX'}, 
    {name: 'Micronesia, Federated States of', code: 'FM'}, 
    {name: 'Moldova, Republic of', code: 'MD'}, 
    {name: 'Monaco', code: 'MC'}, 
    {name: 'Mongolia', code: 'MN'}, 
    {name: 'Montserrat', code: 'MS'}, 
    {name: 'Morocco', code: 'MA'}, 
    {name: 'Mozambique', code: 'MZ'}, 
    {name: 'Myanmar', code: 'MM'}, 
    {name: 'Namibia', code: 'NA'}, 
    {name: 'Nauru', code: 'NR'}, 
    {name: 'Nepal', code: 'NP'}, 
    {name: 'Netherlands', code: 'NL'}, 
    {name: 'Netherlands Antilles', code: 'AN'}, 
    {name: 'New Caledonia', code: 'NC'}, 
    {name: 'New Zealand', code: 'NZ'}, 
    {name: 'Nicaragua', code: 'NI'}, 
    {name: 'Niger', code: 'NE'}, 
    {name: 'Nigeria', code: 'NG'}, 
    {name: 'Niue', code: 'NU'}, 
    {name: 'Norfolk Island', code: 'NF'}, 
    {name: 'Northern Mariana Islands', code: 'MP'}, 
    {name: 'Norway', code: 'NO'}, 
    {name: 'Oman', code: 'OM'}, 
    {name: 'Pakistan', code: 'PK'}, 
    {name: 'Palau', code: 'PW'}, 
    {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
    {name: 'Panama', code: 'PA'}, 
    {name: 'Papua New Guinea', code: 'PG'}, 
    {name: 'Paraguay', code: 'PY'}, 
    {name: 'Peru', code: 'PE'}, 
    {name: 'Philippines', code: 'PH'}, 
    {name: 'Pitcairn', code: 'PN'}, 
    {name: 'Poland', code: 'PL'}, 
    {name: 'Portugal', code: 'PT'}, 
    {name: 'Puerto Rico', code: 'PR'}, 
    {name: 'Qatar', code: 'QA'}, 
    {name: 'Reunion', code: 'RE'}, 
    {name: 'Romania', code: 'RO'}, 
    {name: 'Russian Federation', code: 'RU'}, 
    {name: 'RWANDA', code: 'RW'}, 
    {name: 'Saint Helena', code: 'SH'}, 
    {name: 'Saint Kitts and Nevis', code: 'KN'}, 
    {name: 'Saint Lucia', code: 'LC'}, 
    {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {name: 'Samoa', code: 'WS'}, 
    {name: 'San Marino', code: 'SM'}, 
    {name: 'Sao Tome and Principe', code: 'ST'}, 
    {name: 'Saudi Arabia', code: 'SA'}, 
    {name: 'Senegal', code: 'SN'}, 
    {name: 'Serbia and Montenegro', code: 'CS'}, 
    {name: 'Seychelles', code: 'SC'}, 
    {name: 'Sierra Leone', code: 'SL'}, 
    {name: 'Singapore', code: 'SG'}, 
    {name: 'Slovakia', code: 'SK'}, 
    {name: 'Slovenia', code: 'SI'}, 
    {name: 'Solomon Islands', code: 'SB'}, 
    {name: 'Somalia', code: 'SO'}, 
    {name: 'South Africa', code: 'ZA'}, 
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {name: 'Spain', code: 'ES'}, 
    {name: 'Sri Lanka', code: 'LK'}, 
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Suriname', code: 'SR'}, 
    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {name: 'Swaziland', code: 'SZ'}, 
    {name: 'Sweden', code: 'SE'}, 
    {name: 'Switzerland', code: 'CH'}, 
    {name: 'Syrian Arab Republic', code: 'SY'}, 
    {name: 'Taiwan, Province of China', code: 'TW'}, 
    {name: 'Tajikistan', code: 'TJ'}, 
    {name: 'Tanzania, United Republic of', code: 'TZ'}, 
    {name: 'Thailand', code: 'TH'}, 
    {name: 'Timor-Leste', code: 'TL'}, 
    {name: 'Togo', code: 'TG'}, 
    {name: 'Tokelau', code: 'TK'}, 
    {name: 'Tonga', code: 'TO'}, 
    {name: 'Trinidad and Tobago', code: 'TT'}, 
    {name: 'Tunisia', code: 'TN'}, 
    {name: 'Turkey', code: 'TR'}, 
    {name: 'Turkmenistan', code: 'TM'}, 
    {name: 'Turks and Caicos Islands', code: 'TC'}, 
    {name: 'Tuvalu', code: 'TV'}, 
    {name: 'Uganda', code: 'UG'}, 
    {name: 'Ukraine', code: 'UA'}, 
    {name: 'United Arab Emirates', code: 'AE'}, 
    {name: 'United Kingdom', code: 'GB'}, 
    {name: 'United States', code: 'US'}, 
    {name: 'United States Minor Outlying Islands', code: 'UM'}, 
    {name: 'Uruguay', code: 'UY'}, 
    {name: 'Uzbekistan', code: 'UZ'}, 
    {name: 'Vanuatu', code: 'VU'}, 
    {name: 'Venezuela', code: 'VE'}, 
    {name: 'Viet Nam', code: 'VN'}, 
    {name: 'Virgin Islands, British', code: 'VG'}, 
    {name: 'Virgin Islands, U.S.', code: 'VI'}, 
    {name: 'Wallis and Futuna', code: 'WF'}, 
    {name: 'Western Sahara', code: 'EH'}, 
    {name: 'Yemen', code: 'YE'}, 
    {name: 'Zambia', code: 'ZM'}, 
    {name: 'Zimbabwe', code: 'ZW'} 
  ]

const Pay = ({msg}) => {
  const fun=()=>{
    localStorage.clear();
    msg()
  }
  const [skiped,setSkiped]=useState(false)
    const {data: session} = useSession()
    const [payWay,setPayWay]=useState("card")
    if(session){
        
        return (
            <>
            <div className="ml-4 mt-2">
            <div className="flex items-center justify-between w-[80%] mx-auto">
              <div className="flex items-center gap-2">
                <img src={session.user.image} width={60} className="rounded-full" alt={session.user.name}/>
                <span>{session.user.name}</span>
                <button onClick={()=>signOut()}>signOut</button>
              </div>
              <div className="text-blue-700">
                <button onClick={fun}>Select another package</button>
              </div>
            </div>
            <div className="grid grid-cols-2">
            <div>
               <div className="flex flex-col gap-2 mt-2 w-full">
                 <h1>Customer information</h1>
                 <input placeholder="Email *" type="email" value={session.user.email}/>
                  <h2>Billing details</h2>
                  <div className="flex flex-col gap-3">
                     <div>
                       <input placeholder="Full Name *" value={session.user.name} type="text"/>
                      </div>
                      <select className="border border-black rounded-md p-2 ml-2">
                        {
                          dat?.map(i=>{
                               return <option value={i.name} key={i.name}>{i.name}</option> 
                           })
                       }
                     </select>
                    <div>
                      <input placeholder="ADDRESS"  type="text"/>
                   </div>
                   
                    <div>
                       <input placeholder="Tel:+---_---_-- *"  type="tel"/>
                     </div>
                     <div>
                      <select onChange={(e)=>{setPayWay(e.target.value)}} value={payWay}>
                        <option value={"card"}>Credit Card</option>
                        <option value={"paypal"}>paypal</option>
                        <option disabled>Crypto currency</option>
                        <option disabled>Transfer bank not available now</option>
                        {console.log(payWay)}
                      </select>
                     </div>
                  </div>
              </div>
            </div>
            <div className="m-auto flex flex-col items-center gap-4">
              <div>You Will Pay :{localStorage.getItem("price")}€ for {localStorage.getItem("month")} Months</div>
               <div className={`flex gap-4 items-center ${payWay==="card"? "":"hidden"}`}>
                  <label>Credit Card:</label>
                  <StripeCheckout 
                    stripeKey='pk_test_51My7qwBPMltpexmsXF53SsaOf3jnvJhHRwaqqfPbY2hU0NmAw1rg3OefRoRevGMBGCEYxdvrqyn46fFAntv7aSkV00FBjHG8Ah'
                     amount={localStorage.getItem("price")*100}
                     label='pay'
                     email={session.user.email}
                    description={`your payment will be ${localStorage.getItem("price")}`}/>
               </div>
               <div className="flex gap-4 items-center">
            <PayPalScriptProvider>
              <PayPalButtons style={{
                color: "silver",
                layout: "horizontal",
                shape:"pill"
              }}
              className={payWay==="paypal"? "":"hidden"}
              createOrder={(data,actions)=>{
                return actions.order.create({
                  purchase_units: [
                    {
                      amount:{
                        value:localStorage.getItem("price")
                    },
                  }
                  ]
                })
              }}
              ></PayPalButtons>
            </PayPalScriptProvider>
               </div>
            </div>
            </div>
            </div>
            
            </>
        )
    }else if(skiped){
      return(
      <>
      
      <div className="grid grid-cols-2">
            <div>
               <div className="flex flex-col gap-2 mt-2 w-full">
                 <h1>Customer information</h1>
                 <input type="email" placeholder="enter your email"/>
                  <h2>Billing details</h2>
                  <div className="flex flex-col gap-3">
                     <div>
                       <input placeholder="enter your name" type="text"/>
                      </div>
                      <select className="border border-black rounded-md p-2 ml-2">
                        {
                          dat?.map(i=>{
                               return <option value={i.name} key={i.name}>{i.name}</option> 
                           })
                       }
                     </select>
                    <div>
                       <input placeholder="Tel:+---_---_--"  type="tel"/>
                     </div>
                  </div>
              </div>
            </div>
            <div className="m-auto flex flex-col gap-4">
               <div className="flex gap-4 items-center">
                  <label>Credit Card:</label>
                  <StripeCheckout
                    stripeKey='pk_test_51My7qwBPMltpexmsXF53SsaOf3jnvJhHRwaqqfPbY2hU0NmAw1rg3OefRoRevGMBGCEYxdvrqyn46fFAntv7aSkV00FBjHG8Ah'
                     amount={localStorage.getItem("price")}
                     label='pay'
                     email="ilyasselharak@gmail.com"
                    description={`your payment will be ${localStorage.getItem("price")}`}/>
               </div>
               <div className="flex gap-4 items-center">
            <PayPalScriptProvider>
              <PayPalButtons style={{
                color: "silver",
                layout: "horizontal",
                shape:"pill"
              }}
              createOrder={(data,actions)=>{
                return actions.order.create({
                  purchase_units: [
                    {
                      amount:{
                        value:localStorage.getItem("price")
                    },
                  }
                  ]
                })
              }}
              ></PayPalButtons>
            </PayPalScriptProvider>
               </div>
            </div>
            </div>
            
      </>
      )
    }else{
  return (
    <>
      <div className="flex items-center gap-x-2 justify-center h-full">
        <div  onClick={()=>signIn()} className="item-center gap-10 cursor-pointer hover:border-blue-600 flex items-center justify-center border-[1px] border-gray-400 tracking-wide h-12 w-60 text-base rounded-md">
          <FcGoogle />
          <span className="text-sm text-gray-900">
            Sign in with Google
          </span>
        </div>
        <div className="item-center gap-10 cursor-pointer hover:border-blue-600 flex items-center justify-center border-[1px] border-gray-400 tracking-wide h-12 w-60 text-base rounded-md">
          <BsFillSkipEndCircleFill />
          <button onClick={()=>{ setSkiped(true)}} className="text-sm text-gray-900">Buy Without Login</button>
        </div>
      </div>
    </>
  )}
  ;
};

export default Pay;
