// Country-wise emergency numbers

export interface EmergencyNumber {
  country: string;
  countryCode: string;
  police: string;
  ambulance: string;
  fire: string;
  universal?: string;
}

export const EMERGENCY_NUMBERS: EmergencyNumber[] = [
  {
    country: 'India',
    countryCode: 'IN',
    police: '100',
    ambulance: '108',
    fire: '101',
    universal: '112',
  },
  {
    country: 'United States',
    countryCode: 'US',
    police: '911',
    ambulance: '911',
    fire: '911',
    universal: '911',
  },
  {
    country: 'United Kingdom',
    countryCode: 'GB',
    police: '999',
    ambulance: '999',
    fire: '999',
    universal: '999',
  },
  {
    country: 'Canada',
    countryCode: 'CA',
    police: '911',
    ambulance: '911',
    fire: '911',
    universal: '911',
  },
  {
    country: 'Australia',
    countryCode: 'AU',
    police: '000',
    ambulance: '000',
    fire: '000',
    universal: '000',
  },
  {
    country: 'Germany',
    countryCode: 'DE',
    police: '110',
    ambulance: '112',
    fire: '112',
    universal: '112',
  },
  {
    country: 'France',
    countryCode: 'FR',
    police: '17',
    ambulance: '15',
    fire: '18',
    universal: '112',
  },
  {
    country: 'Japan',
    countryCode: 'JP',
    police: '110',
    ambulance: '119',
    fire: '119',
  },
  {
    country: 'China',
    countryCode: 'CN',
    police: '110',
    ambulance: '120',
    fire: '119',
  },
  {
    country: 'Brazil',
    countryCode: 'BR',
    police: '190',
    ambulance: '192',
    fire: '193',
  },
];

export const getEmergencyNumbersByCountry = (countryCode: string): EmergencyNumber | undefined => {
  return EMERGENCY_NUMBERS.find(entry => entry.countryCode === countryCode);
};

export const DEFAULT_EMERGENCY_NUMBER = '112'; // International emergency number
