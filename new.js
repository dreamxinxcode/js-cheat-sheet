const smartGarbage = function (trash, bins) {
    switch (trash){
      case 'waste':
        bins.waste += 1;
        return bins;
      case 'recycling':
        bins.recycling += 1;
        return bins;
      case 'compost':
        bins.compost += 1;
        return bins;
    }
}
