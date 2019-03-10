const x256 = require('x256')

const hexToRgb = (hex) => {
  if (!hex) {
    return 0
  }

  return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i 
    ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
}

const terminalColor = (xtermColor) => {
  switch(xtermColor) {
    case 1:
    case 9:
    case 52:
    case 53:
    case 88:
    case 89:
    case 95:
    case 124:
    case 125:
    case 126:
    case 132:
    case 137:
    case 160:
    case 161:
    case 162:
    case 167:
    case 196:
    case 197:
    case 198:
    case 199:
    case 200:
    case 201:
    case 202:
    case 203:
    case 204:
    case 205:
    case 206:
    case 224:
      return 'red'
      break
    case 5:
    case 13:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 60:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 96:
    case 97:
    case 98:
    case 127:
    case 128:
    case 129:
    case 130:
    case 131:
    case 133:
    case 134:
    case 135:
    case 138:
    case 140:
    case 141:
    case 104:
    case 163:
    case 164:
    case 165:
    case 166:
    case 168:
    case 169:
    case 170:
    case 171:
    case 172:
    case 173:
    case 174:
    case 175:
    case 176:
    case 177:
    case 181:
    case 182:
    case 183:
    case 207:
    case 208:
    case 209:
    case 210:
    case 211:
    case 212:
    case 213:
    case 214:
    case 215:
    case 216:
    case 217:
    case 218:
    case 219:
    case 225:
      return 'magenta'
      break
    case 2:
    case 3:
    case 10:
    case 22:
    case 28:
    case 29:
    case 34:
    case 35:
    case 40:
    case 41:
    case 42:
    case 46:
    case 47:
    case 48:
    case 49:
    case 64:
    case 65:
    case 66:
    case 70:
    case 71:
    case 76:
    case 77:
    case 78:
    case 79:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 107:
    case 108:
    case 112:
    case 113:
    case 114:
    case 115:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
    case 149:
    case 150:
    case 151:
    case 154:
    case 155:
    case 156:
    case 157:
    case 158:
    case 191:
    case 192:
    case 193:
      return 'green'
      break
    case 4:
    case 12:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 61:
    case 62:
    case 63:
    case 67:
    case 68:
    case 69:
    case 72:
    case 73:
    case 74:
    case 75:
    case 81:
    case 99:
    case 105:
    case 117:
    case 146:
    case 147:
      return 'blue'
      break
    case 6:
    case 14:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 30:
    case 31:
    case 32:
    case 33:
    case 36:
    case 37:
    case 38:
    case 39:
    case 43:
    case 44:
    case 45:
    case 50:
    case 51:
    case 80:
    case 109:
    case 110:
    case 111:
    case 152:
    case 153:
    case 159:
    case 189:
    case 194:
    case 195:
      return 'cyan'
      break
    case 7:
    case 8:
    case 59:
    case 87:
    case 101:
    case 102:
    case 103:
    case 116:
    case 123:
    case 139:
    case 145:
    case 188:
    case 231:
    case 232:
    case 233:
    case 234:
    case 235:
    case 236:
    case 237:
    case 238:
    case 239:
    case 240:
    case 241:
    case 242:
    case 243:
    case 244:
    case 245:
    case 246:
    case 247:
    case 248:
    case 249:
    case 250:
    case 251:
    case 252:
    case 253:
    case 254:
    case 255:
      return 'grey'
      break
    case 11:
    case 100:
    case 106:
    case 136:
    case 142:
    case 143:
    case 148:
    case 178:
    case 179:
    case 180:
    case 184:
    case 185:
    case 186:
    case 187:
    case 190:
    case 220:
    case 221:
    case 222:
    case 226:
    case 227:
    case 228:
    case 229:
    case 230:
      return 'yellow'
      break
    case 15:
    case 144:
    case 223:
      return 'white'
      break
    default:
      return 'black'
  }
}

// console.log(hexToRgb('#0033ff'))
// console.log(hexToRgb('#03f'))
module.exports = {
  getTerminalColor: (input) => {
    const rgb = hexToRgb(input)
    return terminalColor(x256(rgb[0], rgb[1], rgb[2]))
  }
}