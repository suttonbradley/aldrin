function cutouts_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[37.5,-160.5],[37.5,-82.5]]).appendArc([39.5,-80.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([73.5,-80.5]).appendArc([75.5,-78.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([75.5,-77.5]).appendArc([77.5,-75.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([92.5,-75.5]).appendArc([94.5,-73.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([94.5,-72.5]).appendPoint([117.5,-72.5]).appendArc([119.5,-74.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([119.5,-75.5]).appendArc([121.5,-77.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([155.5,-77.5]).appendArc([157.5,-79.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([157.5,-141.088892]).appendArc([158.1874514,-142.5979368],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.682734,-167.3827842]).appendArc([186.9022743,-170.1774043],{"radius":2,"clockwise":true,"large":false}).appendPoint([173.38113,-186.2912764]).appendArc([170.5634658,-186.5377901],{"radius":2,"clockwise":true,"large":false}).appendPoint([138.9392021,-160.0018819]).appendArc([137.6721747,-159.5340568],{"radius":2,"clockwise":false,"large":false}).appendPoint([134.009273,-159.500086]).appendArc([133.9907252,-159.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([83.5,-159.5]).appendArc([81.5,-161.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([81.5,-162.5]).appendPoint([39.5,-162.5]).appendArc([37.5,-160.5],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[138,-99],[152,-99]]).appendPoint([152,-85]).appendPoint([138,-85]).appendPoint([138,-99]).close().innerToCAG()
.union(
    new CSG.Path2D([[138,-118],[152,-118]]).appendPoint([152,-104]).appendPoint([138,-104]).appendPoint([138,-118]).close().innerToCAG()
).union(
    new CSG.Path2D([[138,-137],[152,-137]]).appendPoint([152,-123]).appendPoint([138,-123]).appendPoint([138,-137]).close().innerToCAG()
).union(
    new CSG.Path2D([[119,-97],[133,-97]]).appendPoint([133,-83]).appendPoint([119,-83]).appendPoint([119,-97]).close().innerToCAG()
).union(
    new CSG.Path2D([[119,-116],[133,-116]]).appendPoint([133,-102]).appendPoint([119,-102]).appendPoint([119,-116]).close().innerToCAG()
).union(
    new CSG.Path2D([[119,-135],[133,-135]]).appendPoint([133,-121]).appendPoint([119,-121]).appendPoint([119,-135]).close().innerToCAG()
).union(
    new CSG.Path2D([[119,-154],[133,-154]]).appendPoint([133,-140]).appendPoint([119,-140]).appendPoint([119,-154]).close().innerToCAG()
).union(
    new CSG.Path2D([[100,-92],[114,-92]]).appendPoint([114,-78]).appendPoint([100,-78]).appendPoint([100,-92]).close().innerToCAG()
).union(
    new CSG.Path2D([[100,-111],[114,-111]]).appendPoint([114,-97]).appendPoint([100,-97]).appendPoint([100,-111]).close().innerToCAG()
).union(
    new CSG.Path2D([[100,-130],[114,-130]]).appendPoint([114,-116]).appendPoint([100,-116]).appendPoint([100,-130]).close().innerToCAG()
).union(
    new CSG.Path2D([[100,-149],[114,-149]]).appendPoint([114,-135]).appendPoint([100,-135]).appendPoint([100,-149]).close().innerToCAG()
).union(
    new CSG.Path2D([[81,-95],[95,-95]]).appendPoint([95,-81]).appendPoint([81,-81]).appendPoint([81,-95]).close().innerToCAG()
).union(
    new CSG.Path2D([[81,-114],[95,-114]]).appendPoint([95,-100]).appendPoint([81,-100]).appendPoint([81,-114]).close().innerToCAG()
).union(
    new CSG.Path2D([[81,-133],[95,-133]]).appendPoint([95,-119]).appendPoint([81,-119]).appendPoint([81,-133]).close().innerToCAG()
).union(
    new CSG.Path2D([[81,-152],[95,-152]]).appendPoint([95,-138]).appendPoint([81,-138]).appendPoint([81,-152]).close().innerToCAG()
).union(
    new CSG.Path2D([[62,-100],[76,-100]]).appendPoint([76,-86]).appendPoint([62,-86]).appendPoint([62,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[62,-119],[76,-119]]).appendPoint([76,-105]).appendPoint([62,-105]).appendPoint([62,-119]).close().innerToCAG()
).union(
    new CSG.Path2D([[62,-138],[76,-138]]).appendPoint([76,-124]).appendPoint([62,-124]).appendPoint([62,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[62,-157],[76,-157]]).appendPoint([76,-143]).appendPoint([62,-143]).appendPoint([62,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[43,-100],[57,-100]]).appendPoint([57,-86]).appendPoint([43,-86]).appendPoint([43,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[43,-119],[57,-119]]).appendPoint([57,-105]).appendPoint([43,-105]).appendPoint([43,-119]).close().innerToCAG()
).union(
    new CSG.Path2D([[43,-138],[57,-138]]).appendPoint([57,-124]).appendPoint([43,-124]).appendPoint([43,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[43,-157],[57,-157]]).appendPoint([57,-143]).appendPoint([43,-143]).appendPoint([43,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[160.69302,-171.0757624],[171.4176422,-180.074789]]).appendPoint([180.4166688,-169.3501668]).appendPoint([169.6920466,-160.3511402]).appendPoint([160.69302,-171.0757624]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.1381756,-158.8627978],[156.8627978,-167.8618244]]).appendPoint([165.8618244,-157.1372022]).appendPoint([155.1372022,-148.1381756]).appendPoint([146.1381756,-158.8627978]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = cutouts_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        