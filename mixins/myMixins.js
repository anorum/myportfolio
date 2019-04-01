export default {
  methods: {
    shadeColor(color, percent) {
      var R = parseInt(color.substring(1, 3), 16)
      var G = parseInt(color.substring(3, 5), 16)
      var B = parseInt(color.substring(5, 7), 16)

      R = parseInt((R * (100 + percent)) / 100)
      G = parseInt((G * (100 + percent)) / 100)
      B = parseInt((B * (100 + percent)) / 100)

      R = R < 255 ? R : 255
      G = G < 255 ? G : 255
      B = B < 255 ? B : 255

      var RR =
        R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16)
      var GG =
        G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16)
      var BB =
        B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16)

      return '#' + RR + GG + BB
    },
    getTintedColor(color, v) {
      if (color.length > 6) {
        color = color.substring(1, color.length)
      }
      var rgb = parseInt(color, 16)
      var r = Math.abs(((rgb >> 16) & 0xff) + v)
      if (r > 255) r = r - (r - 255)
      var g = Math.abs(((rgb >> 8) & 0xff) + v)
      if (g > 255) g = g - (g - 255)
      var b = Math.abs((rgb & 0xff) + v)
      if (b > 255) b = b - (b - 255)
      r = Number(r < 0 || isNaN(r)) ? 0 : (r > 255 ? 255 : r).toString(16)
      if (r.length == 1) r = '0' + r
      g = Number(g < 0 || isNaN(g)) ? 0 : (g > 255 ? 255 : g).toString(16)
      if (g.length == 1) g = '0' + g
      b = Number(b < 0 || isNaN(b)) ? 0 : (b > 255 ? 255 : b).toString(16)
      if (b.length == 1) b = '0' + b
      return '#' + r + g + b
    }
  }
}
