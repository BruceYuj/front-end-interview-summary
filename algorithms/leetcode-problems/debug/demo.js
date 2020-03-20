var isRectangleOverlap = function(rec1, rec2) {
    if(rec1[0] > rec2[0]) [rec1, rec2] = [rec2, rec1];

    return !(rec2[0] >= rec1[2] || rec2[1] >= rec1[3] || rec2[3] <= rec1[1]);
};

isRectangleOverlap([4,0,6,6],[-5,-3,4,2])