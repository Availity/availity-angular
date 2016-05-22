import ngModule from '../module';

ngModule.config( $provide => {

  $provide.decorator('$log', ($delegate, AvLogger) => {
    return new AvLogger(null, $delegate);
  });

});

