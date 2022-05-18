import axios from 'axios';

const getData = (data) => {
  const getOptinsData = (data) => {
    let optionsData = [];
    data &&
      data.forEach((option) => {
        optionsData.push(option?.stringValue);
      });
    return optionsData;
  };

  const getItemsData = (data) => {
    let itemsData = [];
    data &&
      data.forEach((item) => {
        itemsData.push({
          id: item?.structValue?.fields?.id?.numberValue,
          url: item?.structValue?.fields?.url?.stringValue,
          name: item?.structValue?.fields?.name?.stringValue,
          price: item?.structValue?.fields?.price?.stringValue
        });
      });
    return itemsData;
  };

  return axios
    .post('https://expresschatapiapp.herokuapp.com/chatbot', data)
    .then((response) => {
      const responsePayload = response?.data?.message?.responseMessages[0]?.payload;
      const fallbackText = responsePayload?.text?.text[0];
      const responseData = {
        text: responsePayload ? responsePayload?.fields?.message?.stringValue : fallbackText,
        options: getOptinsData(responsePayload?.fields?.options?.listValue?.values),
        items: getItemsData(
          responsePayload?.fields?.items?.listValue?.values[0]?.listValue?.values
        ),
        action: responsePayload?.fields?.action?.stringValue,
        isBot: true,
        audioOutput:
          response?.data?.message?.responseMessages[1]?.outputAudioText?.text || fallbackText
      };
      return responseData;
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};

export default getData;
