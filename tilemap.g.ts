// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000100000000000000000000010000000001000000000001010101010100000000010000000000000000000000000000000100000000000000000000000101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101000000000000000000000101010101010000000000000000000001010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2], TileScale.Sixteen);
            case "level":
            case "level2":return tiles.createTilemap(hex`24002400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010000000000010100000000000000000000000000000000000000000000000000000001010100060001010100000000000000000000000100000000000101010101010101010101010101010101010101010101010101000001010100000000000000000000000000000000000000000101010000000000000000000000000100000000000000000000000000000000000000000001000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010100000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101010100000000000001010101010101010101010101010101010101010101010101000000000000000000000000000000010100000000000101010100000000000000000101000000000000000000000000000000010000000000000001010000000000000000000001000000000000000000000000000000010000000000000001010000000000000000000001000000010101010100000000000000010000000000000001010000000000000001010101000000000000010101000000000000000000000001010001010000000000000000000001010000000000000000000000000000000000000000000001010000010101000000000000010000000000000000000000000101010101010000000001010000000000000000000000000000000000000000000000000101000001010000000001010000000000000000000000000000000000000000000000010100000001000000000001010101010101010101010101000000000000000000010101010000000000000000000101000000000000000000000001000000000000000000000001000000000000000000000101000000000000000000000005000000000000000000000001000000000000000000000001000000000000000000000005040202030203020302020401000000000000000000000001000000000000000000000005010101010101010101010101010101010101010101010101`, img`
....................................
....................................
....................................
....................................
....................................
......................222...........
....................................
...222..............................
..............2222..................
.................................222
....................................
....................22.....22.......
....................222...222.......
....2.....22222222222222222222222222
..222....................222........
....2.....................2.........
....2...............................
22..2...............................
....................................
...................................2
...................................2
22222222222222222......2222222222222
222222222222...............22.....22
22........22...............2.......2
2..........2...............2.......2
2..........2...22222.......2.......2
2.......2222......222...........22.2
2..........22......................2
2..222......2............222222....2
2........................22..22....2
2.......................22...2.....2
222222222222.........2222.........22
...........2...........2..........22
...........2...........2...........2
...........2...........2...........2
...........2222222222222222222222222
`, [myTiles.transparency16,sprites.builtin.forestTiles2,sprites.swamp.swampTile1,sprites.swamp.swampTile2,sprites.swamp.swampTile3,sprites.builtin.forestTiles16,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
