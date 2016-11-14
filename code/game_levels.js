var GAME_LEVELS = [
  ["                                                                                 ",
   "                                                                                 ",
   "                                                                                 ",
   "                                                                                 ",
   "                                                                  o o            ",
   "   x                       o                                                     ",
   "   x                                                o              xxx           ",
   "   x                      xxx                 o     xx      xx       xx          ",
   "   x     @                           o o      xx                       x         ",
   "   x    xxx                                                            x         ",
   "   x                                xxxxx                              x  h      ",
   "   x              xxxx                                                 xxxxxxx   ",
   "   x                                       o o                               x   ",
   "   x                   o                                                  o  x   ",
   "   x!!!!!!!!!!xxxx                        xxxxx                              x   ",
   "   xxxxxxxxxxxx  x   o                                                    |  x   ",
   "                 x                          h                     xxxxxx!!!!!x   ",
   "                 xxxxxxxx||||||||||||xxxxxxxxxxxxx|||||||||||||xxx   xxxxxxxx    ",
   "                        x!!!!!!!!!!!!x           x!!!!!!!!!!!!!x                 ",
   "                    o   x!!!!!!!!!!!!x     o     x!!!!!!!!!!!!!x                 ",
   "                        xxxxxxxxxxxxxx           xxxxxxxxxxxxxxx                 ",
   "xxx||||||x                                                              p        ",
   "xxx!!!!!!x                                 h                                     ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                                                  ",
   "                                                                                                      o           ",
   "                                                                                                     xxx          ",
   "                                                                  o   o                                           ",
   "                         h         oo                                                              o   o   o      ",
   "          p      h       xx      xxxxx               o   o        o   o                                           ",
   "        xxxxxxxxxxxxx                              xxxxxxxxxxxx                                   xxxxxxxxxx      ",
   "                                                                  x   x                           =!!!!!!!!x      ",
   "                                                             xx |       |  xx            !        xxxxxxxxxx      ",
   "                                      x!!!!!!!!!!!!x          xx                         v       x                ",
   "                                      xvvvvvvvvvvvvx          xxx!!!!!!!!!                       x                ",
   "                                                                  xxxxxxxxxxxxx                xxxx               ",
   "                                                                              xxxxxx         vx x                 ",
   "                                                                                   x            x                 ",
   "                                                                                   xx           xx                ",
   "                  o                                                                   xxx         x               ",
   "              o       o                                        o     x                x           x               ",
   "                         o                                   h       x            | o x           x               ",
   "          o                 o                              xxxxxxxx  x          xxxxxxx           x               ",
   "                                  o                       x          x                            x               ",
   "     @                                               x               x     h                  xxxx                ",
   "    xxx                                              x               x   xxxxx               xx                   ",
   "    x x                           o                  x               x     o     xxx         x                    ",
   "!!!!x x                                   oo         x!!!!!!!!!x     !     =     x x         x                    ",
   "!!!!x x||||||||||||||||||||||xx       xxxxxxxxxx     x!!!!!!!xx      xxxxxxxxxxxxx xx  o o  xx                    ",
   "!!!!x x!!!!!!!!!!!!!!!!!!!!!!x    o                 xx!!!!!!xx                      xx  =  xx                     ",
   "!!!!x x!!!!!!!!!!!!!!!!!!!!!!x                     xx!!!!!!xx                        xxxxxxx                      ",
   "!!!!x x!!!!!!!!!!!!!!!!!!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx                                                      ",
   "!!!!x x!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx                                                       ",
   "!!!!x x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx                                                        "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        p                                                                     ",
   "                                        x                                                                     ",
   "                                                                                                              ",
   "                                       xxx                       o                                            ",
   "                                               !!!        !!!  xxx                                            ",
   "                                       x x                 !x!        !x!         o                           ",
   "                                     xxx xxx   x          x                                                   ",
   "                                   x      x            xxx                                                    ",
   "                                   x  |  |x                 x          x      x!!!!!!!x                       ",
   "                                   x      x                 xxxxxxxxxxxx       xxxxxxxx                       ",
   "                                  xx      xx      x   x      x                                                ",
   "                                  vxx      o          x x                                                     ",
   "                                   x               x!!!x                     o                                ",
   "                                   x      x           x                     xxx                               ",
   "                                   xx     xx  =       x              o                                        ",
   "                                       o  x            x            xxx                                       ",
   "                                          x      o!!x                                                         ",
   "                                      xxx     xxxxx                                                           ",
   "                                     x                      x!!!x             o                               ",
   "                              o   o   x   x           x                      xxv        xxx                   ",
   "                                        o     o                o                         x!!!x                ",
   "                             xxx xx         xxxxxx        o                        o                          ",
   "      o       o          o   x xxx x |     x!!!!!!!!!!!!!!x          v     x                                  ",
   "      x       x          x       o                                                                            ",
   "   o                                  |    xx                                         xxx                o    ",
   "  xxx                               x     x                                         x!!!xx               xxx  ",
   "  x x                            |               x x                                  v                   o   ",
   "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x                           x                       x   x                             x                     ",
   "  x                           xx                                    x                                         ",
   "  x                                          xxxx|     xxx xxx                             x            x     ",
   "  x                xxx             o o                                  o x         xxx                       ",
   "  xxxx       xx          x        o                                      xxx       x!!!x          x           ",
   "  x               o   o       x              x x        xxx          xxx        x    v                        ",
   "  x                           xxxxxxxxxxxxx  x oo x  | x oo x   |x oo  xx xx                    xxx        x  ",
   "  x      @          x         x           x!                  x         x                                     ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                             xxxxxxxxxxxxxx   ",
   "              o           o                                                                  x             x  ",
   "                 x              o                                                            x  p          x  ",
   "         o                    x                                                              x             x  ",
   "                    =                x                                                       xxxxxx        x  ",
   "      o    x       h                                                                               xx      x  ",
   "                                 h            o                                                            x  ",
   "      x                    o                                                                     xxxx     xx  ",
   "           h    h     o                o                                                          o o o    x  ",
   "                   xxx           x         =                                                               x  ",
   "       |  o  =                               =                                            xx xxxxxxxxxx    x  ",
   "       x     x=     h                  o                       x     x     x     x     x        x          x  ",
   "       x= o   x           x                x                   xxx   xxx   xxx   xx   xxx        xxxxx    xx  ",
   "       x     x     x           h             ===      =                             =                      !  ",
   "   x    x  o  !            o                                        				=                      !  ",
   "                                    =                           xxxx xxxxx xxxxx xxxxx xxxxx xxx xxxxx xxxxx  ",
   "    o      o      o     o   xxx         o                     xx                                              ",
   "                                    h                                                                         ",
   "       x         h               =                                                   =                        ",
   "              =           o            x  o             xx                                                    ",
   "            x       xxx         xxx       x                          =                                        ",
   "      h             =                                                                      o                  ",
   "           o               o                x  o  =                                 x      x                  ",
   "      x                         h                           xx     xx                                         ",
   "  h           xxx         xxx         xxx       x                          x                  x               ",
   "                                                                                                              ",
   "      o                                      x         =            ||                                        ",
   "  xxxxx                o        o        o                                                                    ",
   "  x            o xx   xxx o xxxxxxxxx o xx                                                x                   ",
   "  x            x       x   x       x   x                 ||                  x     x                          ",
   "  x  @                 xxxxx       xxxxx                                                                      ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
