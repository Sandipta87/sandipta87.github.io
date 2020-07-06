import * as React from 'react';
import styles from './ValidateFormControls.module.scss';
import { IValidateFormControlsProps } from './IValidateFormControlsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Stack, IStackProps, TextField, PrimaryButton, DefaultButton } from '@fluentui/react';
import validator from 'validator';

const columnProps: Partial<IStackProps> = {
  padding:8
};


export interface IValidateFormState {
    name:string,
    url:string,
    nameError:string,
    urlError:string
  
}

export default class ValidateFormControls extends React.Component<IValidateFormControlsProps,IValidateFormState> {
  public constructor(props:IValidateFormControlsProps) {
    super(props);
    this.state={
      name:'',
      url:'',
      nameError:'',
      urlError:''
    }
  }
  
  validateData = () =>{
    debugger;
    let isValidated = true;
    if(validator.isEmpty(this.state.name.trim()))
    {
      this.setState({ nameError: 'Please enter the name' });
      isValidated = false;
    }
    else if(!validator.isLength(this.state.name.trim(),{'min':4}))
    {
      this.setState({ nameError: "Name can't be less than 4" });
      isValidated = false;
    }
    else if(validator.isEmpty(this.state.url.trim()))
    {
      this.setState({ urlError: 'Please enter the url' });
      isValidated = false;
    }
    else if(!validator.isURL(this.state.url.trim()))
    {
      this.setState({ urlError: 'Invalid URL' });
      isValidated = false;
    }
    return isValidated;
  }

  submitForm = () => {
    this.setState({ urlError: '', nameError:''});
    debugger;
    if(this.validateData())
      console.log('All Good');
    
    
  }

  private changeName(data: any): void {
      this.setState({ name: data.target.value});
  }

  private changeUrl(data: any): void {
    this.setState({ url: data.target.value});
  }

  public render=(): React.ReactElement<IValidateFormControlsProps>  => {
    return (
        <Stack>
            <Stack {...columnProps}>
              <TextField 
                label="Name" 
                value={this.state.name}
                onChange={this.changeName.bind(this)}
                autoFocus={true}  
                required 
                errorMessage={this.state.nameError}
              />
              <TextField 
                label="Url" 
                value={this.state.url}
                onChange={this.changeUrl.bind(this)}
                multiline 
                rows={4} 
                required 
                errorMessage={this.state.urlError}
              />

              <Stack horizontal>  
                <PrimaryButton onClick={this.submitForm}>Save</PrimaryButton>
                <DefaultButton>Cancel</DefaultButton>
              </Stack> 
            </Stack>  
        </Stack>  
    );
  }
}
