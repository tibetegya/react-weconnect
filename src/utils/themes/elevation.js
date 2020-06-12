const shadowColor = {
  1: 'rgba(0,0,0,.2)',
  2: 'rgba(0,0,0,.14)',
  3: 'rgba(0,0,0,.12)',
};

const elevation = {
  '0dp': 'none',
  '1dp': `0 2px 1px -1px ${shadowColor[1]}, 0 1px 1px 0px ${shadowColor[2]}, 0 1px 3px 0px ${shadowColor[3]};`,
  '2dp': `0 3px 1px -2px ${shadowColor[1]}, 0 2px 2px 0px ${shadowColor[2]}, 0 1px 5px 0px ${shadowColor[3]};`,
  '3dp': `0 3px 3px -2px ${shadowColor[1]}, 0 3px 4px 0px ${shadowColor[2]}, 0 1px 8px 0px ${shadowColor[3]};`,
  '4dp': `0 2px 4px -1px ${shadowColor[1]}, 0 4px 5px 0px ${shadowColor[2]}, 0 1px 10px 0px ${shadowColor[3]};`,
  '5dp': `0 3px 5px -1px ${shadowColor[1]}, 0 5px 8px 0px ${shadowColor[2]}, 0 1px 14px 0px ${shadowColor[3]};`,
  '6dp': `0 3px 5px -1px ${shadowColor[1]}, 0 6px 10px 0px ${shadowColor[2]}, 0 1px 18px 0px ${shadowColor[3]};`,
  '7dp': `0 4px 5px -2px ${shadowColor[1]}, 0 7px 10px 1px ${shadowColor[2]}, 0 2px 16px 1px ${shadowColor[3]};`,
  '8dp': `0 5px 5px -3px ${shadowColor[1]}, 0 8px 10px 1px ${shadowColor[2]}, 0 3px 14px 2px ${shadowColor[3]};`,
  '9dp': `0 5px 6px -3px ${shadowColor[1]}, 0 9px 12px 1px ${shadowColor[2]}, 0 3px 16px 2px ${shadowColor[3]};`,
  '10dp': `0 6px 6px -3px ${shadowColor[1]}, 0 10px 14px 1px ${shadowColor[2]}, 0 4px 18px 3px ${shadowColor[3]};`,
  '11dp': `0 6px 7px -4px ${shadowColor[1]}, 0 11px 15px 1px ${shadowColor[2]}, 0 4px 20px 3px ${shadowColor[3]};`,
  '12dp': `0 7px 8px -4px ${shadowColor[1]}, 0 12px 17px 2px ${shadowColor[2]}, 0 5px 22px 4px ${shadowColor[3]};`,
  '13dp': `0 7px 8px -4px ${shadowColor[1]}, 0 13px 19px 2px ${shadowColor[2]}, 0 5px 24px 4px ${shadowColor[3]};`,
  '14dp': `0 7px 9px -4px ${shadowColor[1]}, 0 14px 21px 2px ${shadowColor[2]}, 0 5px 26px 4px ${shadowColor[3]};`,
  '15dp': `0 8px 9px -5px ${shadowColor[1]}, 0 15px 22px 2px ${shadowColor[2]}, 0 6px 28px 5px ${shadowColor[3]};`,
  '16dp': `0 8px 10px -5px ${shadowColor[1]}, 0 16px 24px 2px ${shadowColor[2]}, 0 6px 30px 5px ${shadowColor[3]};`,
  '17dp': `0 8px 11px -5px ${shadowColor[1]}, 0 17px 26px 2px ${shadowColor[2]}, 0 6px 32px 5px ${shadowColor[3]};`,
  '18dp': `0 9px 11px -5px ${shadowColor[1]}, 0 18px 28px 2px ${shadowColor[2]}, 0 7px 34px 6px ${shadowColor[3]};`,
  '19dp': `0 9px 12px -6px ${shadowColor[1]}, 0 19px 29px 2px ${shadowColor[2]}, 0 7px 36px 6px ${shadowColor[3]};`,
  '20dp': `0 10px 13px -6px ${shadowColor[1]}, 0 20px 31px 3px ${shadowColor[2]}, 0 8px 38px 7px ${shadowColor[3]};`,
  '21dp': `0 10px 13px -6px ${shadowColor[1]}, 0 21px 33px 3px ${shadowColor[2]}, 0 8px 40px 7px ${shadowColor[3]};`,
  '22dp': `0 10px 14px -6px ${shadowColor[1]}, 0 22px 35px 3px ${shadowColor[2]}, 0 8px 42px 7px ${shadowColor[3]};`,
  '23dp': `0 11px 14px -7px ${shadowColor[1]}, 0 23px 36px 3px ${shadowColor[2]}, 0 9px 44px 8px ${shadowColor[3]};`,
  '24dp': `0 11px 15px -7px ${shadowColor[1]}, 0 24px 38px 3px ${shadowColor[2]}, 0 9px 46px 8px ${shadowColor[3]};`,

};

export default elevation;
