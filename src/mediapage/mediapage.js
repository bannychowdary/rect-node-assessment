import React from 'react';

class MediaPage extends React.Component {
    state = {}
    render() {
        return (
            <div>
<div class="row">
 <div class="col-12 col-md">
           <button type="button" class="btn btn-outline-dark">Media Page</button>
          </div>
</div>
<div class="row">
         
          <div class="col-6 col-md">
            <div class="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
                        <button type="button" class="btn btn-secondary">Single Media</button>
                        <button type="button" class="btn btn-secondary">Multiple Media</button>
                    </div>
          </div>
          <div class="col-6 col-md">
                    <form>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Title</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control form-control-sm" id="colFormLabelSm" ></input>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="colFormLabel" class="col-sm-2 col-form-label">Description</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="colFormLabel" ></input>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Tags</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control form-control-lg" id="colFormLabelLg" ></input>
                                
                            </div>
                            
                        </div>
                        <div>
                            <button type="button" class="btn btn-primary">ADD</button>
                            </div>
                    </form>
                    </div>
		   </div>
		   </div>
		   
        );
    }
}

export default MediaPage;