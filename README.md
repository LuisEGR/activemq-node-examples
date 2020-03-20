# activemq-node-examples
Producer and Consumer examples for NodeJs

    
docker run -p 61616:61616 \
    -p 8161:8161 \
    -p 5672:5672 \
    -p 61613:61613 \
    -v /Users/luisenriquegonzalezrodriguez/Documents/Gitlab/test-amq/volDocker:/opt/activemq/conf \
    -v /Users/luisenriquegonzalezrodriguez/Documents/Gitlab/test-amq/volDocker:/opt/activemq/data \
    rmohr/activemq